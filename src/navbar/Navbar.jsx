import React, { useState } from 'react'
import {Nav, NavLinkBox,Navlink , Container, Logo} from './navbar.js'
import logo from './../assets/logotip.png'
import { Link } from 'react-router-dom'
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
                <Link to={'/'}>
                    <Logo src={logo}/>
                </Link>
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