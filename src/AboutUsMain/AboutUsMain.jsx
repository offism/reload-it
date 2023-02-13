import React from 'react'
import {Container, AUmain,AUmainHeader ,AUmainHeaderBox,AUmainHeaderTitle} from './aboutusmain.js'
import { Marque } from '../modules/Marquee.jsx'
import Navbar from '../navbar/Navbar.jsx'
import BackOfAU from './../assets/reload.gif'

function AboutUsMain (){
    
    return (
        <>
        <Navbar/>
        <AUmain>
            <Container>
                <AUmainHeader>
                    <AUmainHeaderBox background={BackOfAU}>
                        <AUmainHeaderTitle><span className='reloadSpan'>RELOAD</span> <br />IT ACADEMY</AUmainHeaderTitle>  
                    </AUmainHeaderBox>
                </AUmainHeader>
            </Container>
        </AUmain>
        </>
    )
}

export default AboutUsMain