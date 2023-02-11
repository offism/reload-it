import React from 'react'
import {Container,DimBox, DimFone,DimTitle,DimBottom} from './dim.js'
import FirstOrder from './../modals/FirstOrder.jsx'
import Gif from './../assets/glitch2.gif'

function Dim (){
    return(
            <DimBox>
               <DimFone back={Gif}></DimFone>
               <Container>
                    <DimBottom>
                       <DimTitle>ПЕРВОЕ пробное занятие - БЕСПЛАТНО</DimTitle>
                       <FirstOrder btnClass={`modalBtn1`} btnText={`ЗАПИСАТЬСЯ`} modalTitle1={`Заявка`}modalTitle2={`на беспалатный урок`} modalTitleText={`Оставьте заявку и мы свяяжемся с вами в ближайшее время`}/>
                    </DimBottom>
                </Container>
            </DimBox>
    )
}

export default Dim