import { struct } from "pb-util"
import { isEmpty } from "../../util/helpers"
import { projectId, sessionClient } from "../../util/dialogFlow"
const v4 = require('uuid/v4');

const languageCode = "en-US"

const parseDialogflowResponse = async (results, oldContexts, sessionId) => {
    const errorMessages = [
        "Woops! It seems like I can't connect to Narratory."
    ]

    const messages = isEmpty(results.fulfillmentMessages) ? errorMessages : results.fulfillmentMessages[0].text.text

    let endOfConversation = false

    try {
        endOfConversation = results.webhookPayload ? (struct.decode(results.webhookPayload) as any).endOfConversation : false
    } catch (err) {
        console.log("=== Error: Failed to parse if turn was end of conversation. Assuming it wasnt the end.")
    }
    
    return {
        messages: messages.map(message => {
            return {
                text: message,
                richContent: false,
                fromUser: false
            }
        }),
        contexts: (results.intent && results.intent.isFallback && results.intent.displayName == "Default Fallback Intent") ? oldContexts : results.outputContexts, // If we get a fallback, we want to keep contexts from before
        customEvent: messages.customEvent ? messages.customEvent : null,
        sessionId,
        endOfConversation
    }
}

export default async (req, res) => {

    const firstSession = !req.body.sessionId
    const sessionId = !firstSession ? req.body.sessionId : v4()
    const sessionPath = sessionClient.sessionPath(projectId, sessionId);
    const previousContexts = req.body.contexts

    const input = req.body.event ? { // Input for EVENTS
        session: sessionPath,
        queryInput: {
            event: {
                name: req.body.event,
                languageCode: languageCode
            }
        }
    } : { // Input for MESSAGES
            session: sessionPath,
            queryInput: {
                text: {
                    text: req.body.message,
                    languageCode: languageCode
                }
            },
            queryParams: {
                contexts: previousContexts
            }
        }

    try {
        if (process.env.NODE_ENV == "development") {
            console.log("===== Calling Dialogflow")
        }
        let responses = await sessionClient.detectIntent(input)
        let results = responses[0].queryResult

        // If we get an error the first attempt, we do one retry. The nature of cloud functions is unfortunately that slow-starts might take enough time for dialogflow to neglect the webhook call
        if (firstSession && isEmpty(results.fulfillmentMessages)) {
            if (process.env.NODE_ENV == "development") {
                console.log("===== Got error, trying again")
            }
            responses = await sessionClient.detectIntent(input)
            results = responses[0].queryResult
        }

        if (process.env.NODE_ENV == "development" && results.diagnosticInfo) {
            console.log(JSON.stringify(struct.decode(results.diagnosticInfo))) // Prints the webhook delay
        }
        const response = await parseDialogflowResponse(results, previousContexts, sessionId)
        if (process.env.NODE_ENV == "development") {
            console.log("===== Got response from Dialogflow")
        }
        
        return res.json(response)
    } catch (err) {
        console.log(err)
        return res.json({
            messages: [{ text: "Woops. I had issues connecting to the server, it seems", fromUser: false }],
            contexts: [],
            sessionId: undefined
        })
    }
};