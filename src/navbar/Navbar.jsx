import React from 'react'
import {Nav, NavLinkBox, Logo,Navlink,Navlink1 , Container} from './navbar.js'

function NavbarMenu (){
    return (
        <Nav>
            <Container>

            <NavLinkBox>
                <Navlink1 href={'/'}>
                    <Logo src={"https://picsum.photos/200/300"}/>
                </Navlink1>
            </NavLinkBox>
            <NavLinkBox>
                <Navlink href={'/'}>КУРСЫ</Navlink>
                <Navlink href={'/'}>ЛОКАЦИЯ</Navlink>
                <Navlink href={'/'}>КОНТАКТЫ</Navlink>
            </NavLinkBox>
            </Container>
        </Nav> 
    )
}

export default NavbarMenu