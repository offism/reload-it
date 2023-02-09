import React from 'react'
import {MainTitle, MainBox, MainMiniBox, MainInput, Label, InputWrapper} from './main.js'
import { Marque } from '../modules/Marquee.jsx'

function Main (){
    
    return (
        <MainBox>
            <MainMiniBox>
               <MainTitle data-aos="fade-down" data-aos-anchor-placement="top-bottom" data-aos-duration="1000" data-aos-delay="200"><span className='reloadSpan'>RELOAD</span><br />IT ACADEMY</MainTitle>
               <InputWrapper>
                   <MainInput id={'search-input'} placeholder={'Найти курс...'}/>
                   <Label htmlFor={'search-input'}><i className="uil uil-search"></i></Label>
               </InputWrapper>  
            </MainMiniBox>
            <Marque/>
        </MainBox>
    )
}

export default Main