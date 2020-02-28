import React, { useState, useEffect, useRef } from "react"
import Log from "./Log"
import { callApi } from "../util/helpers"
const sendImage = require("../assets/send.png")

const MAX_HISTORY = 30

export interface RichMessage {
  text: string
  richContent: boolean
  content: {
    image_url?: string
    video_url?: string
    title?: string
    description?: string
  }
  fromUser: boolean
  customEvent?: string
}

const Chat = ({ triggerEvent, showContent }) => {
  const [history, setHistory] = useState([]) // Keeps track of the chat messages
  const [newMessages, setNewMessages] = useState([]) // Keeps track of new messages that are to be animated
  const [draft, setDraft] = useState("") // Keeps track of the input-fields data
  const [contexts, setContexts] = useState("") // Contexts recieved from Dialogflow
  const [sessionId, setSessionId] = useState("") // SessionID for the Dialogflow session
  const [animating, setAnimating] = useState(false) // A variable keeping track of if we are animating or not

  useEffect(() => {
    // For handling the initial event, starting the chat
    handleEvent(triggerEvent)
  }, [triggerEvent])

  useEffect(() => {
    if (!animating && newMessages.length != 0) {
      setAnimating(true) // Set animating to true, to prevent multiple messages to be printed at once
      setHistory(history =>
        history.concat([newMessages[0]]).slice(-MAX_HISTORY)
      ) // Add the first new message to our history
      setNewMessages(newMessages => newMessages.slice(1)) // Remove the message we just put up
    }
  }, [animating, newMessages]) // This effect should run everytime these two variables are updated

  const addMessagesToLog = (
    messages: {
      text: string
      richContent: boolean
      customEvent: string
      fromUser: boolean
    }[]
  ) => {
    setNewMessages(newMessages => newMessages.concat(messages))
  }

  const handleLineBreak = () => {
    //setNewMessages(newMessages => splitMessages.slice(1).concat(newMessages)) // not needed any more, saving for reference
    setNewMessages(newMessages => [{}].concat(newMessages))
  }

  const handleAnimation = (animating: boolean) => {
    setAnimating(animating)
  }

  const handleEvent = async (event: string, _sessionId: string = null) => {
    const response = await callApi("api/call-narratory", {
      event,
      contexts,
      sessionId: _sessionId
    })
    handleResponse(response)
  }

  const handleResponse = response => {
    addMessagesToLog(response.messages)

    if (response.contexts != contexts) {
      setContexts(response.contexts)
    }
    if (response.sessionId != sessionId) {
      setSessionId(response.sessionId)
    }
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const userMessage = draft
    addMessagesToLog([
      {
        text: userMessage,
        richContent: false,
        customEvent: null,
        fromUser: true
      }
    ])

    setDraft("")

    const response = await callApi("api/call-narratory", {
      message: userMessage,
      contexts,
      sessionId
    })
    handleResponse(response)
  }

  const sendButtonWidth = "40px"

  return (
    <div className="full-height">
      <Log
        messages={history}
        setAnimating={handleAnimation}
        handleEvent={showContent}
        showContent={showContent}
        handleLineBreak={handleLineBreak}
      />
      <form className={"bottom container"} onSubmit={handleSubmit}>
        <input
          autoFocus
          className="form input"
          type="text"
          value={draft}
          onChange={e => setDraft(e.target.value)}
        />
        <button
          className="form submit"
          onClick={handleSubmit}
          disabled={draft == ""}
        >
          <img className="sendImage" src={sendImage} />
        </button>
      </form>
      <style jsx>{`
        .form {
          outline: none;
          height: 40px;
          padding: 0px;
          margin: 0px;
          max-width: 100%;
          background-color: inherit;
        }
        input,
        input:active,
        input:focus {
          outline: none;
          margin: 0px;
          width: calc(100% - ${sendButtonWidth});
          max-width: calc(100% - ${sendButtonWidth});
          border: none;
          border-bottom: 1px solid #586e75;
        }
        .submit {
          //border-radius: 0px 18px 18px 0px;
          border: 0px;
          background-color: inherit;
          width: ${sendButtonWidth};
          max-width: ${sendButtonWidth};
        }
        .sendImage {
          vertical-align: text-bottom;
          height: 25px;
        }
        .bottom {
          position: fixed;
          vertical-align: center;
          bottom: 75px;
          margin-left: -15px; // Since .container is used for the width, we need to add a negative margin to align the fixed bottom bar with the content above
        }
      `}</style>
    </div>
  )
}

export default Chat
