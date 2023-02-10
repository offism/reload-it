import React from 'react'
import {AboutUsBox,Container,AboutUsWrapper,AboutUsText,AboutUsBtn,AboutUsMainTitle,AboutUsTitle,AboutUsTextBox,AboutUsVideoBox} from './aboutUs.js'
function AboutUs (){
    return (
        <AboutUsBox id="aboutus">
          <Container>
            <AboutUsWrapper>
             <AboutUsTextBox>
               <AboutUsMainTitle>О НАС</AboutUsMainTitle>
               <AboutUsTitle>RELOAD IT ACADEMY</AboutUsTitle>
               <AboutUsText>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus quos reiciendis rerum ducimus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, at. Lorem ipsum dolor sit amet. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque, non.</AboutUsText>
               <AboutUsBtn>ПОДРОБНЕЕ</AboutUsBtn>
             </AboutUsTextBox>
             <AboutUsVideoBox></AboutUsVideoBox>
            </AboutUsWrapper>
          </Container>
        </AboutUsBox>    
       
        )
}

export default AboutUs