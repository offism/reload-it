import React from 'react'
import {Container, AUmain,AUmainHeader ,AUmainHeaderBox,AUmainHeaderTitle,AUmainHeaderMarque1,AUmainHeaderMarque2} from './aboutusmain.js'
import { Marque } from '../modules/Marquee.jsx'
import Navbar from '../navbar/Navbar.jsx'
import BackOfAU from './../assets/reload4.gif'

function AboutUsMain (){
    
    return (
        <>
        <Navbar/>
        <AUmain>
            <Container>
                <AUmainHeader>
                    <AUmainHeaderMarque1>
                        <Marque/>
                    </AUmainHeaderMarque1>
                    <AUmainHeaderBox background={BackOfAU}>
                        <AUmainHeaderTitle><span className='reloadSpan'>RELOAD</span> <br />IT ACADEMY</AUmainHeaderTitle>  
                    </AUmainHeaderBox>
                    <AUmainHeaderMarque2>
                        <Marque/>
                    </AUmainHeaderMarque2>
                </AUmainHeader>
            </Container>
        </AUmain>
        </>
    )
}

export default AboutUsMain