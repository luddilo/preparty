import narrative from "./narrative"
import { questions } from "./userInitiatives"
import { Agent, Language } from "narratory"

const agent: Agent = {
    agentName: "Preparty",
    language: Language.English,
    narrative,
    userInitiatives: questions,
    narratoryKey: require("../narratory_credentials.json").narratoryKey,
    bridges: ["So", "Where were we", "Now"],
    googleCredentials: require("../google_credentials.json")
}

export default agent