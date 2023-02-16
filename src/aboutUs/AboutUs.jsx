import React from 'react'
import {AboutUsBox,Container,AboutUsWrapper,AboutUsText,AboutUsBtn,AboutUsMainTitle,AboutUsTitle,AboutUsTextBox,AboutUsVideoBox} from './aboutUs.js'
import ReactPlayer from 'react-player/lazy'
import videoURL from './../assets/videos/reload1.mp4'
import { Link } from 'react-router-dom'
function AboutUs (){

  const videoStyles = {
    width:'100%;',
    height:'100%',
    outline: 'none',
    border: 'none'
  }
    return (
        <AboutUsBox id="aboutus">
          <Container>
            <AboutUsWrapper>
             <AboutUsTextBox>
               <AboutUsMainTitle>О НАС</AboutUsMainTitle>
               <AboutUsTitle>RELOAD IT ACADEMY</AboutUsTitle>
               <AboutUsText>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus quos reiciendis rerum ducimus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, at. Lorem ipsum dolor sit amet. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque, non.</AboutUsText>
               <Link to={'/aboutus'}>
                  <AboutUsBtn>ПОДРОБНЕЕ</AboutUsBtn>
               </Link>
             </AboutUsTextBox>
             <AboutUsVideoBox className='videoBox'>
                <ReactPlayer url={videoURL} controls={true} style={videoStyles}/>
             </AboutUsVideoBox>
            </AboutUsWrapper>
          </Container>
        </AboutUsBox>    
       
        )
}

export default AboutUs