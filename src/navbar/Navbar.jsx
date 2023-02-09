import React, { useState } from 'react'
import {Nav, NavLinkBox,Navlink , Container} from './navbar.js'

function NavbarMenu (){

const [navbar, setNavbar] = useState(false)

const changeBackground = ()=>{
    if(window.scrollY){
        setNavbar(true)
    }    else{
        setNavbar(false)
    }
}
    window.addEventListener('scroll',changeBackground)
    
    return (
        <Nav className={navbar ? 'navActive' : ''}>
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