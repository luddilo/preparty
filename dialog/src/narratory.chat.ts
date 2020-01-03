// import { BotTurn, ANYTHING } from "narratory"
// import { IHaveSmartSpeaker, Yes, No } from "./intents"


// export const hearMore = [
//     ["We believe that voice is the next big thing when it comes to user interfaces."],
//     ["Already today, many homes have smart devices that respond to voice commands"],
//     ["This allows seemless control of everything from music, to accessing news, weather and much more"],
// ]

// export const smartDevicesQuery: BotTurn = {
//     say: ["Have you tried things like these?", "Have you tried these so-called voice apps?", "Have you tried?"], user: [
//         {
//             intent: [...Yes, "I do", "I have"], bot: {
//                 say: "Cool. Which one was it? Alexa? Google Home? Siri perhaps?",
//                 repair: true
//             }
//         },
//         { intent: [...No, "I do not", "I don't have"], bot: "All right. Well. Winter is coming and with that Christmas. Who knows ;-)" },
//         {
//             intent: IHaveSmartSpeaker, bot: {
//                 say: "Very nice. How do you like it?", user: [
//                     { intent: ["I like it", "It is good", "Great", "fantastic", "awesome", "fabulous"], bot: "I'm very glad to hear!" },
//                     { intent: ["I don't like it", "not so much", "not at all", "It is bad", "terrible", "really bad", "it stinks", "it doesn't work"], bot: "I'm sad to hear. Hopefully it will get better in the future." },
//                     { intent: ["It is okay", "so so", "average", "ANYTHING"], bot: "interesting" },
//                 ]
//             }
//         },
//         { intent: ANYTHING, bot: ["I see", "Interesting"] }
//     ]
// }