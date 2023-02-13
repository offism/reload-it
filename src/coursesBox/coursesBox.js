import Styled from 'styled-components'

export const Container = Styled.div`
display: flex;
margin: 0 auto;
width: 80%;
@media(max-width:1200px){
    margin: 0 auto;
    flex-direction:column;
}
`
export const Icon = Styled.span`
color: #B2F030;
font-size:32px;
`
export const IconX = Styled.span`
color: #000;
font-size:32px;
cursor:pointer;
`
export const CoursesBox = Styled.div`
display: flex;
width:100%;
`

export const EachCourseBoxPseudo = Styled.div`
position: relative;
overflow: hidden;
display: flex;
width:300px;
min-height: 160px;
border-radius: 5px;
padding: 20px 15px;
text-decoration: none;
flex-direction:column;
border: 2px solid #000;
transition: .3s ease all;
&:before {
    content: '';
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .4);
    position: absolute;
    top: 0;
    left: 0;
  }
&:after {
    content: '';
    color: #fff;
    width: 25%;
    height: 210%;
    transform: rotate(60deg);
    background: #B2F042;
    position: absolute;
    top: -56%;
    left: 37%;
    -webkit-transform: rotate(60deg);
    -moz-transform: rotate(60deg);
    -ms-transform: rotate(60deg);
    -o-transform: rotate(60deg);
}
@media(max-width: 1200px){
    margin-top: 10px;
    margin-bottom: 10px;
    width:360px;
    &:after {
        width: 25%;
        height: 250%;
        top: -74%;
        left: 37%;
        -webkit-transform: rotate(65deg);
      }
}
@media(max-width:768px){
    width: 100%;
    &:after{
        width: 14%;
        height: 400%;
        top: -145%;
        left: 41%;
        transform: rotate(75deg);
    }
   }
@media(max-width:569px) {

    &:after {
      width: 17%;
      height: 350%;
      top: -125%;
      left: 44%;
      -webkit-transform: rotate(67deg);
    }
}
@media(max-width:390px) {

    &:after {
        width: 20%;
        height: 205%;
        top: -50%;
        left: 41%;
        -webkit-transform: rotate(63deg)
    }
}
`
export const EachCourseBox = Styled.div`
display: flex;
width:300px;
min-height: 160px;
border-radius: 5px;
padding: 20px 15px;
text-decoration: none;
flex-direction:column;
border: 2px solid #000;
transition: .3s ease all;
@media(max-width: 1200px){
    width:360px;
}
@media(max-width: 992px){
    margin-top: 10px;
    margin-bottom: 10px;
}
@media(max-width:768px){
    width: 100%;
   }

`
export const CourseHeader = Styled.div`
display: flex;
align-items: flex-start;
justify-content: space-between;
`



export const CourseTitle = Styled.h2`
font-size: 24px;
color:#000;
width: 70%;
margin: 0 0 10px 0;
font-family: 'Play','League Spartan', 'Roboto';
@media(max-width: 1200px){
    font-size: 22px;
}
@media(max-width:569px){
    font-size: 24px;
   }
`

export const CourseCount = Styled.p`
color:#B286FD;
font-family: 'Play','League Spartan', 'Roboto';
margin: 0;
    

@media(max-width: 1200px){
    font-size: 24px;
   }
@media(max-width:569px){
    font-size: 20px;
   }
`
export const EachCourseBoxBottom = Styled.div`
display: flex;
align-items: center;
justify-content: space-between;
color:#000;
@media(max-width:1200px){
    font-size: 24px;
   }
@media(max-width:569px){
    font-size: 20px;
   }
`

export const CourseDuration = Styled.p`
font-family: 'Play','League Spartan', 'Roboto';
margin: 0;
`

export const PseudoWrapper = Styled.div`
display: flex;
align-items:center;
justify-content: center;
width:100%;
height: 100%;
position: absolute;
`
export const PseudoText = Styled.p`
color:#fff;
font-family: 'Play','League Spartan', 'Roboto';
position: absolute;
z-index: 1;
font-size:26px;
letter-spacing:5px;
transform: rotate(-30deg);
top: 28%;
left: 22%;
   @media(max-width:1200px){
    transform: rotate(-28deg);
    top: 26%;
    left: 30%;
   }
   @media(max-width:768px){
    transform: rotate(-17deg);
    top: 24%;
    left: 39%;
    font-size: 29px
}
@media(max-width:569px){
    font-size: 28px;
    -webkit-transform: rotate(-22deg);
    -ms-transform: rotate(-22deg);
    transform: rotate(-22deg);
    top: 23%;
    left: 35%;
}
@media(max-width:390px){
    font-size: 26px;
    top: 25%;
    left: 28%;
    transform: rotate(-26deg);
}
`
