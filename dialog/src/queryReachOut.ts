import { BotTurn, DynamicBotTurn } from "narratory"
import { Yes, No, MyEmailIs } from "./nlu"
import { SIGNUP_URL } from "./settings"

export const queryReachOut = (purpose: string): Array<BotTurn | DynamicBotTurn> => ([{
    cond: {
        signedUp: null
    },
    say: [
        `Do you want us to reach out, and tell you more about ${purpose}?`,
        `Do you want us to email you info about ${purpose}?`,
        `Should we contact you with more info about ${purpose}?`
    ],
    user: [
        { intent: [...Yes.examples, "please do", "yes"], bot: signup(purpose) },
        { intent: No, bot: "Okay, no problem" }
    ]
}, {
    say: `I'll make sure my humans also mention this when they contact you!`,
    url: SIGNUP_URL,
    params: ["purpose", "email"],
}])

export const signup = (purpose: string): BotTurn => ({
    say: "Okay. What is your email?",
    user: [
        {
            intent: MyEmailIs, bot: {
                say: "Thanks",
                set: {
                    signedUp: true,
                    purpose,
                },
                url: SIGNUP_URL,
                params: ["purpose", "email"],
                bot: [{
                    cond: {
                        signupStatus: "success"
                    },
                    say: "Great! We will reach out shortly!"
                },
                {
                    say: "Unfortunately something must have gone wrong, please try again later or reach out to us on info@preparty.se"
                }]
            }
        }
    ]
})