import React from "react"
import Typist from 'react-typist'
import dynamic from 'next/dynamic'
import 'react-typist/dist/Typist.css'
import { RichMessage } from "./Chat"
import { navbarHeight, navbarVerticalPadding, verticalPadding, skipAnimating } from "../layouts/Settings"
import autoscroll from 'autoscroll-react'

const DELAY_BETWEEN_LINES = 1000
const DELAY_BETWEEN_CHARACTERS = 25

interface LogProps {
    setAnimating: (boolean) => void
    handleEvent: (string) => void
    showContent: (any) => void
    messages: any[]
}

class Log extends React.Component<LogProps, any> {
    constructor(props) {
        super(props)
    }

    handleAnimationDone = (message: RichMessage) => {
        setTimeout(() => {
            this.props.setAnimating(false)
        }, DELAY_BETWEEN_LINES)
    }

    getMessage = (message, index, last) => {
        return (
            <div className={`message ${message.fromUser ? "user" : "bot"}`} key={`message-${index}`}>
                {this.getTextMessage(message, last)}
                {message.richContent && this.getRichContent(message)}
                <style jsx>{`
                    .message {
                        margin-bottom: 5px;
                    }
                    .user {
                        font-weight: bold;
                        text-align: right;
                        padding-right: 20px;
                    }                    
                    .bot {
                    }
                `}</style>
            </div>
        )
    }

    getRichContent = (message) => {
        const { content } = message
        return (
            <div>
                {content.title && <h2>{content.title}</h2>}
                {content.description && <p>{content.description}</p>}
                {content.image_url && <img src={content.image_url} />}
            </div>
        )
    }

    getTextMessage = (message: RichMessage, last: boolean) => {
        const { setAnimating, handleEvent, showContent } = this.props
        if (last) {
            if (message.fromUser) {
                setAnimating(false) // Ideally, we would instead set animating to true below and remove setAnimating(true) from the useEffect in the chat component, as well as removing this line, but it doesnt work for some reason
            } else {
                if (message.customEvent) { // Handle event through the passed down function
                    handleEvent(message.customEvent)
                }
                if (message.richContent) {
                    showContent(message.content)
                }
                return <Typist // Animating text being typed
                    avgTypingDelay={DELAY_BETWEEN_CHARACTERS}
                    onTypingDone={() => this.handleAnimationDone(message)}
                    cursor={{ hideWhenDone: true, hideWhenDoneDelay: 200 }}
                >
                    {message.text}
                </Typist>
            }
        }
        return <span>{message.text}</span> // All non-animated texts (History)
    }

    render() {
        const { messages, setAnimating, handleEvent, showContent, ...props } = this.props
        return (
            <div {...props} className={"top"} >
                {messages.map((message, index) => this.getMessage(message, index, index == messages.length - 1))}
                <style jsx>{`
                    .top {
                        height: calc(100% - ${navbarVerticalPadding}*2 - ${navbarHeight});
                        overflow-y: auto;
                        font-size: 20px;
                    }
                `}</style>
            </div>
        )
    }
}

export default autoscroll(Log)

// position: absolute;
//                     bottom: 0%;
//                     overflow-y: scroll;
//                     height: 90%;
//                     margin-bottom: 10%;  