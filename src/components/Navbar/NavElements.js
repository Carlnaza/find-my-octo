import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'

export const Nav = styled.nav`
    height: 100px;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 2% 10%;
`

export const NavLinks = styled(Link)`
    text-decoration: none;
    font-size: 1rem;
    list-style-type: none;
    margin: 1%;
    font-weight: 800;
    letter-spacing: 3px;
    cursor: pointer;
    color: #B3B3B3 !important;
    &:visited {
        color: inherit;
    }
`