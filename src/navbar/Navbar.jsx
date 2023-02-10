import React, { useState,useCallback } from 'react'
import {Nav, NavLinkBox,Navlink , Container, Logo,NavManu} from './navbar.js'
import logo from './../assets/logotip.png'
import { Link } from 'react-router-dom'
import { HamburgerCollapse } from 'react-animated-burgers'

function NavbarMenu (){
  
const [navbar, setNavbar] = useState(false)
const [isActive, setIsActive] = useState(false)

  const toggleButton = useCallback(
    () => setIsActive(prevState => !prevState),
    [],
  )

const changeBackground = ()=>{
    if(window.scrollY){
        setNavbar(true)
    }    else{
        setNavbar(false)
    }
}
    window.addEventListener('scroll',changeBackground)
    
    return (
        <>
        <Nav className={navbar ? 'navActive' : ''}>
            <Container>
            <NavLinkBox>
                <Link to={'/'}>
                    <Logo src={logo}/>
                </Link>
            </NavLinkBox>
            <NavLinkBox>
                <Navlink href={'#aboutus'}>О НАС</Navlink>
                <Navlink href={'#course'}>КУРС</Navlink>
                <Navlink href={'#contact'}>СВЯЗАТЬСЯ</Navlink>
                <HamburgerCollapse
                  className="icon_menu"
                  buttonColor="#EEF0F4"
                  barColor="white"
                  {...{ isActive, toggleButton }} />
            </NavLinkBox>
            </Container>
        <NavManu className={isActive ? "navMenu navMenuActive" : "navMenu"}>
            <ul className='navMenuLinks'>
                <li>
                  <a className='navMenuLink' href={'#aboutus'}>О НАС</a>
                </li>
                <li>
                  <a className='navMenuLink' href={'#course'}>КУРС</a>
                </li>
                <li>
                  <a className='navMenuLink' href={'#contact'}>СВЯЗАТЬСЯ</a>
                </li>
            </ul>
        </NavManu> 
        </Nav>
        </>
    )
}

export default NavbarMenu