import { call, Language } from "narratory"
import { googleCredentials } from "../../util/dialogFlow"

export default async (req, res) =>
  res.json(await call({
    googleCredentials,
    language: Language.EnglishUS,
    contexts: req.body.contexts,
    sessionId: req.body.sessionId,
    event: req.body.event,
    message: req.body.message
  }))
