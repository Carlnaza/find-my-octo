import React from 'react'

// Styles
import {
    Nav,
    NavLinks
} from './NavElements.js'


export default function Navbar() {
    return (
        <>
            <Nav>
                <NavLinks to="/">
                    Home
                </NavLinks>
            </Nav>
        </>
    )
}