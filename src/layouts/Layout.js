import React from "react";
import {Nav, Navbar} from "react-bootstrap";
import "./Layout.css"

const Layout = ({children}) => {

    return (
        <div className="main">
            <Navbar expand="lg" className="header bg-body-tertiary">
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/posts/add">Add post</Nav.Link>
                    <Nav.Link href="/profile">Profile</Nav.Link>
                </Nav>
            </Navbar>
            <section className="content">{children}</section>
        </div>
    )
}

export {Layout}