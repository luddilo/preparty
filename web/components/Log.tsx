import React from "react"
import ReactDOM from "react-dom"
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
    handleLineBreak: () => void
    messages: any[]
}

class Log extends React.Component<LogProps, any> {
    constructor(props) {
        super(props)
        this.state = {
            lastHeight: 0
        }
    }

    componentDidMount() {
        this.setState({
            ...this.state,
            logRef: ReactDOM.findDOMNode(this.refs["log"])
        })
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
                    .bot::first-letter {
                        text-transform: capitalize;
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

    hasValidCharacterForLineBreak = (char, nextChar = null) => {
        switch (char) {
            case " ": 
            case "\n": 
                return true
            case ";":
            case ",":
            case ".":
                return nextChar && this.hasValidCharacterForLineBreak(nextChar)
        }

    }
    onCharacterTyped = (char, pos) => {
        if (this.state.typistRef) {
            const rect = this.state.typistRef.getBoundingClientRect()
            if (rect.width == 0) {
                const typistRef = ReactDOM.findDOMNode(this.refs["typist"])

                this.setState({
                    ...this.state,
                    typistRef,
                    lastHeight: typistRef.getBoundingClientRect().height
                })
            } else {
                if (rect.height != this.state.lastHeight) {
                    if (this.state.lastHeight != 0) {
                        this.props.handleLineBreak()
                        // The below saved for reference, but not needed ...

                        // const lineToType = ((this.refs.typist as any).linesToType[0] as string)
                        // let firstMessage : string
                        // let secondMessage : string
                        // if (this.hasValidCharacterForLineBreak(char, lineToType.length >= pos +1 ? lineToType[pos + 1] : null)) {
                        //     firstMessage = lineToType.substring(0, pos)
                        //     secondMessage = lineToType.substring(pos)
                        // } else {
                        //     firstMessage = lineToType.substring(0, lineToType.substring(0, pos).lastIndexOf(" "))
                        //     secondMessage = lineToType.substring(lineToType.substring(0, pos).lastIndexOf(" "))
                        // }

                        // this.props.splitLastMessage([firstMessage, secondMessage])
                    }
                    this.setState({
                        ...this.state,
                        lastHeight: rect.height
                    })
                }
            }
        } else {
            this.setState({
                ...this.state,
                typistRef: ReactDOM.findDOMNode(this.refs["typist"])
            })
        }
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
                if (message.text === undefined) {
                    this.props.setAnimating(false)
                    return null
                }
                return <Typist // Animating text being typed
                    ref="typist"
                    avgTypingDelay={DELAY_BETWEEN_CHARACTERS}
                    onCharacterTyped={(char, pos) => this.onCharacterTyped(char, pos)}
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
            <div ref="log" {...props} className={"top"} >
                {messages.map((message, index) => this.getMessage(message, index, index == messages.length - 1))}
                <style jsx>{`
                    .top {
                        // height: calc(100% - ${navbarVerticalPadding}*2 - ${navbarHeight});
                        height: calc(100% - 105px); // the input bar is 40px + 75px padding
                        padding-top: 40px;
                        padding-bottom: 80px;
                        overflow-y: auto;
                    }
                `}</style>
            </div>
        )
    }
}

export default autoscroll(Log)