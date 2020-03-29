import { UserTurn, ANYTHING } from "narratory"
import { queryReachOut } from "./queryReachOut"

export const questions: UserTurn[] = [{
    intent: ["I want to quit", "stop this", "stop it", "stop", "end this chat", "goodbye", "bye"],
    bot: {
        say: ["Okay, no problem", "Aborting, yes", "Well, okay then."],
        goto: "END"
    }
},

{
    intent: ["What can I ask you", "what can I do", "what can I write", "what can I ask", "what questions can I ask",
             "what can you do", "can you answer questions", "can you answer a question", "do you answer questions", "what questions do you answer", "what questions can you answer",
             "are you capable of answering questions", "are you capable of answering a question"],
    bot: {
        say: "So far, I can answer some questions about the type of things that we at Preparty can help customers with.",
    }
},
{
    intent: ["How does this work", "how does it work", "what is it about", "what is Preparty about", "what for"],
    bot: {
        say: "Passionate about interactive experiences, Preparty team sticks to their own platform which allows to build chatbot tools and voice-apps, letting robots speak.",
    }
},                                                                           
{
    intent: ["What is your name", "what's your name", "tell me your name", "can you tell your name", 
             "who are you", "do you have a name", "your name",
             "what can I call you", "how can I call you", 
             "how do they call you", "how do people call you", "how do they ussually call you", "how do people usually call you"],
    bot: {
        say: "I don't have a name yet. What do you think is a good name for me?",
        user: [
            { intent: ANYTHING, bot: "Thank's, I'll let my humans know!" }
        ]
    }
},
{
    intent: ["Charge", "the charge", "your charge", "what's the charge", "what is the charge", "what's your charge", "what is your charge",
             "what do you charge", "what does the tool charge", "what does this tool charge", "what does such tool charge", "what does the bot charge", "what does this bot charge", "what does such bot charge",
             "cost", "the cost", "your cost", "what's the cost", "what is the cost", "what's your cost", "what is your cost",
             "what do you cost", "what does it cost", "what does the tool cost", "what does this tool cost", "what does such tool cost", "what does the bot cost", "what does this bot cost", "what does such bot cost"
             "how much do you cost", "how much does it cost", "how much does the tool cost", "how much does this tool cost", "how much does such tool cost", "how much does the bot cost", "how much does this bot cost", "how much does such bot cost", 
             "how costly are you", "how costly is the tool", "are you costly", "is the tool costly", "is this tool costly", "is such tool costly", "is the bot costly", "is this bot costly", "is such bot costly",
             "rate", "the rate", "your rate", "what's the rate", "what is the rate", "what's your rate", "what is your rate",
             "what is your rate", "what is the rate of the tool", "what is the rate of this tool", "what is the rate of such tool", "what is the rate of the bot", "what is the rate of such bot", "what is the rate of this bot",
             "price", "the price", "your price", "what's the price", "what is the price", "what's your price", "what is your price",
             "what is your price", "what is the price of the tool", "what is the price of this tool", "what's your price", "what's the price of the tool", "what's the price of this tool", "what's the price of such tool", "what's the price of the bot", "what's the price of this bot", "what's the price of such bot",
             "are you expensive", "is it expensive", "how expensive are you", "how expensive is the tool", "how expensive is this tool", "how expensive is such tool", "how expensive is the bot", "how expensive is this bot", "how expensive is such bot"
            ], 
    bot: [
        "It depends largely on what type of project we're talking about, and our expertise in this field. If we are passionate "
     + "about the idea, we could be flexible. Reach out, and we can talk!",
        "It depends on the project. We are always happy to discuss your requirements! Reach out if you want to do this."
    ]
},
{
    intent: ["Who built you", "how were you built", "who built this chat", "who built this bot", "who built this tool",
             "who created you", "how were you created", "who created this chat", "who created this bot", "who created this tool",
             "who made you", "how were you made", "who made this chat", "who made this bot", "who made this tool",], 
    bot: [
        "Preparty built this bot using Narratory.io, a service we built to create chat-bots and voice apps easily."
    ]
},
{
    intent: ["When did they built you", "when did they make you", "when did they create you", 
             "when did you appear", "when did you start",
             "when were your created", "when were you built", "when were you made", "when were you born",
             "how long ago did they built you", "how long ago did they make you", "how long ago did they create you", 
             "how long ago did you appear", "how long ago did you start", 
             "how long ago were your created", "how long ago were you built", "how long ago were you made", "how long ago were you born",
             "birth date", "your birth date", "what is your birth date", "what's your birth date", "when is your birth date", "date of birth", "date of your birth", "what is the date of your birth", "what's the date of your birth",
             "do you have birthday", "when is your birthday", "when do you have birthday", "do you have birth day", "when is your birth day", "when do you have birth day"
             "how old are you", "what is your age", "what's your age", "do you know your age"
            ], 
    bot: [
        "The first note about our Preparty family dates back to November, 2019, and we're still growing!"
    ]
},
{
    intent: ["what types of projects do you do", "what projects do you work with", "what types of projects can you do", "what projects can you work with",
             "what is your capability", "what are your capabilities", "what are your abilities", "what are you able to do", "what projects are you able to work with",
             "what clients do you work with", "who do you work with", "whom do you work with"],
    bot: [
        "We do many kinds of projects for small and big clients. Typically, we work with early stage projects and products since this is what we do best!"
    ]
}, 
{
    intent: ["languages you speak", "languages you know", "languages you support", "available languages", "languages I can use",
             "what languages do you speak", "what languages do you know", "what languages do you support", "what languages can you speak", "what languages are you able to speak", "what languages are you able to support", "what languages are available", "what languages are available for you", 
             "what languages does the tool speak", "what languages does the bot speak", "what languages does the tool know", "what languages does the bot know","what languages does the tool support", "what languages does the bot support", "what languages are available for the tool", "what languages are available for the bot", 
             "what are the languages you speak", "what are the languages you know", "what are the languages you support", "what are the languages the tool supports",
             "how many languages do you speak", "how many languages do you know", "how many languages do you support", "how many languages does the tool support", "how many languages does the bot support",
             ],
    bot: [
        "Currently, I speak only English, but the tool I'm built with - Narratory.io - supports many languages"
    ]
},
{
    intent: ["Do you speak entities.languages"],
    bot: [
        "Currently, I speak only English, but the tool I'm built with - Narratory.io - supports many languages"
    ]
},
{
    intent: ["What programming languages do you know", "what programming languages do you work with", "programming languages"],
    bot: [
        "We have worked mostly in Typescript and Kotlin, but we are flexible and adapt to the needs of your use-case."
    ]
},
{
    intent: ["Do you work with entities.programmingLanguages"],
    bot: [
        "We have worked mostly in Typescript and Kotlin, but we are flexible and adapt to the needs of your use-case."
    ]
},
{
    intent: ["Why Preparty", 
             "what are the strengths", "Preparty strengths",
             "your pros", "Preparty pros", ],
    bot: [
        "TO BE ELABORATED"
    ]
},
{
    intent: ["I want to work with you", "Can I work with you", "Can we work together", "Can I join you", "I would like to join you", "I'd like to join you", "I want to join you",
             "I want to work with Preparty", "Can I work with Preparty", "Can we work together", "Can I join Preparty", "I would like to join Preparty", "I'd like to join Preparty", "I want to join Preparty",
             "I want to co-work", "I want to co-work with you", "Can I co-work with you", "Can we co-work", "I would like to co-work with you", "I'd like to co-work with you", "I want to co-work with you", 
             "I want to cowork", "I want to cowork with you", "Can I cowork with you", "Can we cowork", "I would like to cowork with you", "I'd like to cowork with you", "I want to cowork with you", 
             "I want to collaborate", "I want to collaborate with you", "Can I collaborate with you", "Can we collaborate", "I would like to collaborate with you", "I'd like to collaborate with you", "I want to collaborate with you",  
            ],
    bot: {
        say: ["That would be fun!", "That would be great", "Welcome!"],
        set: {
            purpose: "how we could work together"
        },
        bot: queryReachOut("how we could work together")
    }
},
{
    intent: ["Can I contact Preparty", "can I contact Preparty people", "can I contact somebody from Preparty", "can I reach Preparty", "can I reach Preparty people", "can I reach somebody from Preparty",
             "how do I contact you", "how can I contact you", "how do I reach you", "how can I reach you", 
             "how do I contact Preparty", "how can I contact Preparty", "how do I reach Preparty", "how can I reach Preparty", 
             "how do I contact Preparty people", "how can I contact Preparty people", "how do I reach Preparty people", "how can I reach Preparty people", 
             "how do I contact somebody from Preparty", "how can I contact somebody from Preparty", "how do I reach somebody from Preparty", "how can I reach somebody from Preparty",
             "I want to talk to a human", "I would like to talk to a human", "I'd like to talk to a human", 
             "I want to talk to Preparty", "I would like to talk to Preparty", "I'd like to talk to Preparty", "I want to talk to Preparty people", "I would like to talk to Preparty people", "I'd like to talk to Preparty people",
             "I want to talk to somebody from Preparty", "I would like to talk to somebody from Preparty", "I'd like to talk to somebody from Preparty",
             "I want to reach somebody from Preparty", "I would like to reach somebody from Preparty", "I'd like to reach somebody from Preparty" 
            ],
    bot: {
        say: "You can reach us at info@narratory.io for now, soon the preparty email will be up."
    }
}
]
