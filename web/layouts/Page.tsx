import Container from "react-bootstrap/Container"
import Nav from "../components/Nav"
import Head from "../components/Head"
import { navbarHeight, verticalPadding, navbarVerticalPadding } from "./Settings"

export default ({ title, children, pageRef }) => (
    <div>
      <Head>
        <title>{title}</title>
      </Head>      
      <Nav activePage={pageRef}/>
      <Container fluid={false} className={"myContainer"}>
          { children }
          
        <style jsx global>{`
          html {
            font-family: sans-serif;
            font-size: 22px;
            color: #073642;
          }
          h1 {
            font-size: 28px;
          }
          h2 {
            font-size: 27px;
          }
          h3 {
            font-size: 26px;
          }
          html, #__next, #__next > div, body {
            height: 100%;
          }
          body {
            background-color: transparent;
            font-size: 24px;
          }
          .myContainer {
            background-color: white;
            height: 100%;
            max-height: 100%;
            padding-top: ${verticalPadding}
          }
          .full-height {
            height: 100%;
          }
          .full-width {
            width: 100%;
          }
        `}</style>
      </Container>
    </div>
  )