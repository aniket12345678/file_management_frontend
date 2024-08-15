import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'

const Layout = ({ Page }) => {
    return (
        <div>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">File Manager</Navbar.Brand>
                </Container>
            </Navbar>
            <Page />
        </div>
    )
}

export default Layout
