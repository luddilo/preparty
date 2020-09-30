import { BotTurn, ANYTHING, BridgeTurn } from "narratory"
import { Yes, No, IWorkWith, Great, Bad } from "./nlu"
import { queryReachOut } from "./queryReachOut"

const greeting = ["hi there", "hello there", "hi"]
const welcome = ["welcome to the Preparty agency", "welcome to Preparty agency", "welcome to the Preparty agency"]

const intro = [
  "we are a few tech enthusiasts with a strength in interactive experiences",
  "we make interactive stuff",
  "we are a company creating interactive experiences",
]
const bridge = ["like this dialog", "like the chat we're having now", "like the conversation we're having now"]

export const curious: BotTurn = {
  say: {
    text: [
      "Do you want to hear more, or perhaps look at some projects we have done?",
      "Wanna hear more, or see some projects we have worked on?",
      "Should I tell you more, or perhaps show you some of our work?",
    ],
    suggestions: ["Tell me more", "Show me projects"],
  },
  user: [
    {
      intent: [
        ...Yes.examples,
        "hear more",
        "more",
        "I want to hear more",
        "tell me more",
        "keep telling me",
        "continue",
        "the first",
      ],
      bot: ["Awesome", "Sweet", "Great"],
    },
    {
      intent: [
        "Look at projects",
        "Show me projects",
        "the latter",
        "the second",
        "show the work",
        "work",
        "the projects you have done",
      ],
      bot: {
        say: ["Great", "Absolutely"],
        goto: "PROJECTS",
      },
    },
    { intent: ANYTHING, bot: "I'll tell you some more" },
  ],
}

const purpose: BotTurn = {
  say: [
    "Our purpose at Preparty is to help bring great products to the world.",
    "Our mission, at Preparty, is to help entrepreneurs bring great products to the world.",
  ],
}

const talent: BotTurn = {
  say: [
    "We know it's hard to find tech talent, and we want to do what we can help the best ideas to fly",
    "In this world where tech talent is hard to find, we want to help ideas we believe in to get up in the air",
  ],
}

const founder: BotTurn = {
  say: ["What would you call yourself, a founder? An investor, maybe a recruiter?"],
  user: [
    {
      intent: IWorkWith,
      bot: [
        {
          cond: { job: "recruitment" },
          say: "Happy to hear. We would be happy to hear if you have clients that might be interested working with us",
          bot: queryReachOut("how we work with recruiters"),
        },
        {
          cond: { job: "entrepreneurship" },
          say: "Great to hear. We are entreprenurs ourselves and would love to hear about your ideas!",
          bot: queryReachOut("how we work with startups"),
        },
        {
          cond: { job: "investment" },
          say: "Very nice! Without you, many ideas would never reach the world.",
          bot: queryReachOut("how we work with investors"),
        },
        {
          cond: { job: "marketing" },
          say: "Sweet. Don't you think that bots could do wonder in communication with your users?",
          user: [
            {
              intent: Yes,
              bot: {
                say: "I really think so too",
                bot: queryReachOut("how we could work with marketing departments"),
              },
            },
            {
              intent: No,
              bot: {
                say: "I see. Well, I trust that you know your customers best.",
                bot: queryReachOut("how we think we could help marketeers"),
              },
            },
          ],
        },
        {
          cond: { job: "sales" },
          say: "Very nice! I do sales myself. Or I try. How am I doing, you think?",
          user: [
            {
              intent: Great,
              bot: {
                say: ["Thanks. You're kind :-)", "Thanks. That makes me blush ;-)"],
                bot: queryReachOut("how we could help sales teams"),
              },
            },
            {
              intent: Bad,
              bot: {
                say: "I see. Well, I trust that you could help me get better",
                bot: queryReachOut("how we together could create great sales experiences using chat"),
              },
            },
            {
              intent: ANYTHING,
              bot: {
                say: "I didn't quite get that, but I trust that you could help me get better",
                bot: queryReachOut("how we together could create great sales experiences using chat"),
              },
            },
          ],
        },
      ],
    },
    { intent: ANYTHING, bot: "Alright! Nice! Now." },
  ],
}

const projects: BotTurn = {
  say: {
    text: "Do you want to see some projects that we have done?",
    suggestions: ["Yes, show me projects", "No thanks"],
  },
  user: [
    { intent: [...Yes.examples, "I do", "show me projects"], bot: "Great" },
    {
      intent: [...No.examples, "not interested"],
      bot: {
        say: "Are you sure?",
        user: [
          {
            intent: Yes,
            bot: {
              say: "Okay, no problem!",
              goto: "END",
            },
          },
        ],
      },
    },
    {
      intent: ANYTHING,
      bot: [
        {
          cond: { repairCount: 1 },
          say: "Not sure I got that chief. Could you rephrase please?",
          repair: true,
        },
        {
          say: "Still didn't get it, but I'll move on and show some projects",
        },
      ],
    },
  ],
}

const narratory: BridgeTurn = {
  label: "PROJECTS",
  say:
    "Our most recent project is Narratory. It's a tool to build chatbots and voice-apps. In fact, this dialog is built with it.",
  bot: {
    say: "Pretty neat, right?",
    user: [
      {
        intent: [...Yes.examples, "neat"],
        bot: {
          say: "Right? You can actually try it out yourself on narratory.io, it's free!",
          bot: queryReachOut("Narratory"),
        },
      },
      {
        intent: [...No.examples, "not neat"],
        bot: {
          say: "I guess awesome stuff isn't for everyone ;-) anyway",
          bot: queryReachOut("Narratory"),
        },
      },
      {
        intent: ANYTHING,
        bot: {
          say: "I didn't quite get that. But I'm learning every day!",
          bot: queryReachOut("Narratory"),
        },
      },
    ],
  },
}

const projectExamples = [
  "Among other things, we have built really cool experiences for the Furhat robot",
  "Other than that, we've build pretty ground-breaking experiences with the Furhat robot",
]

const furhatQuery: BotTurn = {
  say: {
    text: "have you met Furhat, perhaps?",
    suggestions: ["I have", "No", "Furhat?"],
  },
  user: [
    {
      intent: [...Yes.examples, "I have"],
      bot: "Awesome. That makes a bot happy :-)",
    },
    {
      intent: [...No.examples, "I have not", "I don't know", "dunno"],
      bot: "I see. Maybe one day!",
    },
    {
      intent: ["who is that", "who is furhat", "what is is", "furhat?"],
      bot: "It is a social robot, quite spectacular",
    },
  ],
}

const gitex: Array<BotTurn | string> = [
  {
    say:
      "One thing we are proud to have built for Furhat is a retail assistant that handled in-store pickups and returns. It was then showcased at the big GITEX fair in Dubai",
  },
  "Maybe next time you come around, I could show you a video of it!",
]

const moreFurhat: BotTurn = {
  say: "Speaking about Furhat, we also worked on apps for robot receptionists, greeters, recruiters and more.",
}

const tellMore: BotTurn = {
  say: "To not bore you, please check out the porfolio page to see more examples of projects we've done.",
}

const workWith: BridgeTurn = {
  say: "Also, if you're interested in working with us, we would be happy to chat with you.",
  bot: [
    {
      cond: { signedUp: true },
      say: "Since you already gave us your email, we'll reach out to you and we can continue the discussion there.",
    },
    ...queryReachOut("about how we could work together"),
  ],
}

const end: BotTurn = {
  label: "END",
  say: [
    {
      cond: { turnCount: 0 },
      text: "Now, do you any questions for me? If not, feel free to browse around the site",
    },
    {
      cond: { turnCount: 1 },
      text: ["Any other questions for me?", "Do you have any more questions?"],
    },
    {
      text: [
        "I like that you're hungry! Shoot any other questions you might have",
        "You're interested, that makes me happy! Any other question?",
        "Anything else you wonder?",
      ],
    },
  ],
  user: [
    {
      intent: ANYTHING,
      bot: [
        {
          cond: { retryCount: 1 },
          say: "I didn't get that. Can you rephrase?",
          repair: true,
        },
        {
          say: "Sorry, I can't answer that yet. In the future, I might! Wanna ask me something else?",
          repair: true,
        },
      ],
    },
  ],
}

export default [
  greeting,
  welcome,
  intro,
  bridge,
  curious,
  purpose,
  talent,
  founder,
  projects,
  narratory,
  projectExamples,
  furhatQuery,
  ...gitex,
  moreFurhat,
  tellMore,
  workWith,
  end,
]
