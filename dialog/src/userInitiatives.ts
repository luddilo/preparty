import { UserTurn, ANYTHING } from "narratory"
import { queryReachOut } from "./queryReachOut"

export const questions: UserTurn[] = [{
    intent: ["I want to quit", "stop this", "stop it", "end this chat", "goodbye", "bye"],
    bot: {
        say: ["Okay, no problem", "Aborting, yes", "Well, okay then."],
        goto: "END"
    }
},

{
    intent: ["what can I ask you", "what can you do", "what can I do", "how does this work", "what can I write"],
    bot: {
        say: "So far, I don't know that much. Mostly talk about the type of things that we at Preparty can help customers with.",
    }
},

{
    intent: ["what is your name", "who are you", "what can I call you"],
    bot: {
        say: "I don't have a name yet. What do you think is a good name for me?",
        user: [
            { intent: ANYTHING, bot: "thank's, I'll let my humans know!" }
        ]
    }
},

{
    intent: ["What do you charge", "what is your price", "what does it cost", "what is your rate"], 
    bot: [
        "It depends largely on what type of project we're talking about, and our expertise in this field. If we are passionate "
     + "about the idea, we could be flexible. Reach out, and we can talk!",
        "It depends on the project. We are always happy to discuss your requirements! Reach out if you want to do this."
    ]
},
{
    intent: ["who built you", "how were you built", "who created you", "who built this chat", "who made this bot"], bot: [
        "Preparty built this bot using Narratory.io, a service we built to easy create chat-bots and voice apps."
    ]
},
{
    intent: ["what types of projects do you do", "what projects do you work with", "what clients do you work with", "who do you work with"],
    bot: [
        "We do many kinds of projects for small and big clients. Typically, we work with early stage projects and products since this is what we do best!"
    ]
}, 
{
    intent: ["What languages do you speak", "what languages do you know"],
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
    intent: ["I want to work with you", "Can I work with you", "Can we work together"],
    bot: {
        say: ["That would be fun!", "That would be great"],
        set: {
            purpose: "how we could work together"
        },
        bot: queryReachOut("how we could work together")
    }
},
{
    intent: ["how do I contact you", "how do I reach you", "I want to talk to a human"],
    bot: {
        say: "You can reach us at info@narratory.io for now, soon the preparty email will be up."
    }
}
]
