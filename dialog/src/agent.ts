import narrative from "./narrative"
import { questions } from "./userInitiatives"
import { Agent, Language } from "narratory"

const narratoryOptions = require("../narratory_credentials.json")

const agent: Agent = {
    agentName: "Preparty",
    language: Language.English,
    narrative,
    userInitiatives: questions,
    bridges: ["So", "Where were we", "Now"],
    narratoryKey: narratoryOptions.narratoryKey,
    googleCredentials: require("../google_credentials.json"),
    logWebhook: narratoryOptions.logWebhook
}

export default agent