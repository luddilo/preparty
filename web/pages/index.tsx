import React, { useState, useEffect } from 'react'
import ChatPane from '../components/Chat'
import Page from '../layouts/Page'
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const ChatPage = () => {
  const [content, setContent] = useState()
  const [jsx, setJsx] = useState(<div></div>)

  useEffect(() => {
    if (content) {
      setJsx(<div>
        {content.title && <h2>{content.title}</h2>}
        {content.description && <p>{content.description}</p>}
        {content.image_url && <img src={content.image_url} />}
      </div>)
    }
  }, [content])

  const showContent = (content: any) => {
    setContent(content)
  }

  return (
    <Page title="Chat" pageRef="">
      <Row className={"full-height"}>
        <Col sm="12" className={"full-height"}>
          <ChatPane triggerEvent={"WELCOME"} showContent={showContent} />
        </Col>
        {/* <Col sm="6" className={"full-height"}>
          <h1>{jsx}</h1>
        </Col> */}
      </Row>
      <style jsx>{`
        div {
          font-size: 20px;
        }
      `}</style>
    </Page>
  )
}

export default ChatPage