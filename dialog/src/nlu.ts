import { Entity, Intent, entities } from "narratory"

export const Yes: Intent = {
  examples: [
    "Yes",
    "Yep",
    "Yeah",
    "Yeh",
    "Yea",
    "Absolutely",
    "Alright",
    "Definitely",
    "Exactly",
    "Of course",
    "Okay",
    "Okey",
    "ok",
    "Ok",
    "OK",
    "Sure",
    "Totally",
    "Well",
    "I do",
    "I am",
    "I would",
    "Let's try",
  ],
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
    "Definitely not",
    "No way",
    "Not now",
    "Not sure",
    "Not really",
  ],
}

export const Great: Intent = {
  examples: [
    "Great",
    "alright",
    "amazing",
    "awesome",
    "fabulous",
    "fantastic",
    "good",
    "really good",
    "interesting",
    "magnificent",
    "not bad",
    "proficient",
    "proficiently",
    "skilled",
    "splendid",
    "terrific",
    "well",
    "really well",
    "wonderful",
    "better than ...",
    "better than I expected",
  ],
}

export const Bad: Intent = {
  examples: [
    "Bad",
    "really bad",
    "horrible",
    "lousy",
    "Not good",
    "poor",
    "terrible",
    "Could do better",
    "Could be better",
    "I expected more",
    "I'm frustrated",
    "I am frustrated",
  ],
}

export const favNumber: Intent = {
  examples: ["what is your favorite number", "what number do you like best", "what number gets you going"],
}

export const virtualAssistant: Entity = {
  name: "virtualFriend",
  enums: [
    { name: "Alexa", alts: ["Alexa", "Amazon Alexa", "The amazon one"] },
    { name: "Google home", alts: ["Google home", "Google assistant", "assistant from google"] },
    { name: "Siri" },
    { name: "Cortana" },
  ],
}

export const favAssistant: Intent = {
  entities: {
    virtualFriend: virtualAssistant,
  },
  examples: [
    "I love siri",
    "I talk to Alexa at home",
    "I have a Google home",
    "my computer has cortana",
    "google assistant on my phone",
  ],
}

export const job: Entity = {
  name: "job",
  enums: [
    {
      name: "entrepreneurship",
      alts: ["entrepreneur", "start companies", "co-founder", "cofounder", "founder", "founding companies"],
    },
    { name: "recruitment", alts: ["hr", "human resources", "recruiter", "recruiting", "talents"] },
    { name: "investment", alts: ["investing", "investor", "finance", "venture capital", "vc"] },
    { name: "marketing", alts: ["marketing", "communications", "branding", "marcom", "marketeer"] },
    { name: "sales", alts: ["selling"] },
    {
      name: "development",
      alts: [
        "software development",
        "programming",
        "coding",
        "software",
        "software developer",
        "developer",
        "dev",
        "programmer",
      ],
    },
  ],
}

export const IWorkWith: Intent = {
  entities: {
    job,
  },
  examples: [
    "_job",
    "I am a _job",
    "my job is _job",
    "I work in _job",
    "Working in _job",
    "I work as _job",
    "Working as _job",
    "do _job",
    "doing _job",
    "I do _job",
    "I am doing _job",
    "i'm doing _job",
    "_job person",
    "I am a _job person",
    "I'm a _job person",
    "_job area",
    "_job field",
    "Coming from _job",
  ],
}

export const MyEmailIs: Intent = {
  entities: {
    email: entities.email,
  },
  examples: ["my email is _email", "it is _email", "_email"],
}

// Notes: env variable to allow special conditions for Google assistant account linking etc
