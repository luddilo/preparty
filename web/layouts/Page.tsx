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
            font-size: 22px;
          }
          h2 {
            font-size: 18px;
          }
          h3 {
            font-size: 16px;
          }
          html, #__next, #__next > div, body {
            height: 100%;
          }
          body {
            background-color: transparent;
            font-size: 16px;
          }
          .myContainer {
            background-color: white;
            height: calc(100% - ${navbarHeight} - 2*${navbarVerticalPadding});
            max-height: calc(100% - ${navbarHeight} - 2*${navbarVerticalPadding});
            padding-top: ${verticalPadding};
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