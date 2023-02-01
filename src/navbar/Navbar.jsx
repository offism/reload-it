import React from 'react'
import {Nav, NavLinkBox, Logo,Navlink} from './navbar.js'

function NavbarMenu (){
    return (
        <Nav>
            <NavLinkBox>
                <Navlink href={'/'}>
                    <Logo src={"https://picsum.photos/200/300"}/>
                </Navlink>
            </NavLinkBox>
            <NavLinkBox>
                <Navlink href={'/'}>КУРСЫ</Navlink>
                <Navlink href={'/'}>ЛОКАЦИЯ</Navlink>
                <Navlink href={'/'}>КОНТАКТЫ</Navlink>
            </NavLinkBox>
        </Nav> 
    )
}

export default NavbarMenu