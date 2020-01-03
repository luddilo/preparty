import { Entity, Intent, entities } from "narratory"

export const Yes: Intent = {
    examples: [
        "Yes",
        "Absolutely",
        "Of course",
        "Yep",
        "Okay",
        "Yeah",
        "Yeh",
        "Totally",
        "Definitely"
    ]
}

export const No: Intent = {
    examples: [
        "No",
        "nope",
        "Noes",
        "Never",
        "Nah",
        "Totally not",
        "Absolutely not",
        "Definitely not"
    ]
}

export const Great: Intent = {
    examples: [
        "Great",
        "fabulous",
        "good",
        "alright",
        "fantastic",
        "splendid",
        "really good",
        "awesome",
        "magnificent",
        "terrific"
    ]
}

export const Bad: Intent = {
    examples: [
        "Terrible",
        "Bad",
        "Could do better",
        "Not good",
        "really bad",
        "horrible"
    ]
}

export const favNumber: Intent = {
    examples: [
        "what is your favorite number",
        "what number do you like best",
        "what number gets you going"
    ]
}

export const virtualAssistant: Entity = {
    name: "virtualFriend",
    enums: [
        { name: "Alexa", alts: ["Alexa", "Amazon Alexa", "The amazon one"] },
        { name: "Google home", alts: ["Google home", "Google assistant", "assistant from google"] },
        { name: "Siri" },
        { name: "Cortana" }
    ]
}

export const favAssistant: Intent = {
    entities: { 
        virtualFriend: virtualAssistant 
    },
    examples: [
        "I love siri",
        "I talk to Alexa at home",
        "I have a Google home",
        "my computer has cortana",
        "google assistant on my phone"
    ]
}

export const job: Entity = {
    name: "job",
    enums: [
        { name: "entrepreneurship", alts: ["entrepreneur", "start companies", "co-founder", "cofounder", "founder", "founding companies"]},
        { name: "recruitment", alts: ["hr", "human resources", "recruiter", "recruiting", "talents"]},
        { name: "investment", alts: ["investing", "investor", "finance", "venture capital", "vc"]},
        { name: "marketing", alts: ["marketing", "communications", "branding", "marcom" ]},
        { name: "sales", alts: ["selling"]},
        { name: "development", alts: ["software development", "programming", "coding", "software" ]}
    ]
}

export const IWorkWith: Intent = {
    entities: {
        job
    },
    examples: [
        "I work in _job",
        "I work as _job",
        "_job",
        "my job is _job",
        "I am a _job"
    ]
}

export const MyEmailIs: Intent = {
    entities: {
        email: entities.email
    },
    examples: [
        "my email is _email",
        "it is _email",
        "_email"
    ]
}

// Notes: env variable to allow special conditions for Google assistant account linking etc