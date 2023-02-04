import React from 'react'
import {Nav, NavLinkBox,Navlink,Navlink1 , Container} from './navbar.js'

function NavbarMenu (){
    return (
        <Nav>
            <Container>
            <NavLinkBox>
                <Navlink className='bitcoin'  href={'/'}>
                   <i className="uil uil-bitcoin"></i>
                </Navlink>
            </NavLinkBox>
            <NavLinkBox>
                <Navlink href={'#course'}>КУРСЫ</Navlink>
                <Navlink href={'/'}>ЛОКАЦИЯ</Navlink>
                <Navlink href={'#contact'}>КОНТАКТЫ</Navlink>
            </NavLinkBox>
            </Container>
        </Nav> 
    )
}

export default NavbarMenu