import React from 'react'
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Container from "react-bootstrap/Container"
import { navbarHeight, navbarVerticalPadding } from "../layouts/Settings"

const links = [
  { href: "/", label: "Chat" },
  { href: "/about", label: "What we do" },
  { href: "/portfolio", label: "What we've done" },
  { href: "/collaborate", label: "Work with us" },
]

// activePage is only used for styling below using .active
const navBar = ({ activePage }) => {
  return (
    <div>
      <Navbar variant="light" fixed="top" expand="lg">
        <Container>
          <Navbar.Brand className="py-0" href="/">PREPARTY LABS</Navbar.Brand>
          <Navbar.Toggle className="py-0" aria-controls="myNavBar" />
          <Navbar.Collapse id="myNavBar" className="justify-content-end">
            <Nav activeKey={`/${activePage}`}>
              {links.map(({ href, label }) => (
                <Nav.Link key={href + label} className={"py-0"} href={href}>{label.toUpperCase()}</Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <style jsx global>{`
      .navbar-brand {
        font-size: 30px;
      }
      .navbar {
        padding-top: ${navbarVerticalPadding};
        padding-bottom: ${navbarVerticalPadding};
        border-bottom: 1px solid #EEE;
        background-color: white;
      }
    `}</style>
    </div>
  )
}

export default navBar
