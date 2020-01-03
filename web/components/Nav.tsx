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
      <Navbar variant="light" expand="sm">
        <Container>
          <Navbar.Brand className="py-0" href="/">PREPARTY LABS</Navbar.Brand>
          <Navbar.Toggle className="py-0" aria-controls="myNavBar" />
          <Navbar.Collapse id="myNavBar">
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
        font-size: 20px;
      }
      .navbar {
        height: ${navbarHeight};
        padding-top: ${navbarVerticalPadding};
        padding-bottom: ${navbarVerticalPadding};
        font-size: 16px;
        border-bottom: 1px solid #EEE;
      }
    `}</style>
    </div>
  )
}

export default navBar
