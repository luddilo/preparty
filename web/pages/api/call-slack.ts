import Axios from "axios"
import { slackUrl } from "../../util/slack"

export default async (req, res) => {
    const { email, purpose } = req.body
    
    if (!email || !purpose) {
        return res.json({
            message: "Email or purpose not set, aborting"
        })
    }

    let message = `${email} wants to be contacted regarding ${purpose}`
    
    await Axios.post(slackUrl, {
        text: message
    })

    return res.json({
        set: {
            signupStatus: "success"
        }
    })
}