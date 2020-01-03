import dialogflow from "dialogflow"

// Google credentials populated from Zeit secret OR local google_credentials.json file in next.config.js
export const projectId = process.env.project_id

const config = {
    credentials: {
        private_key: process.env.private_key,
        client_email: process.env.client_email
    }
}

export const sessionClient = new dialogflow.SessionsClient(config);