import Styled from 'styled-components'

export const Container = Styled.div`
display: flex;
margin: 0 auto;
width: 80%;
@media(max-width:569px){
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
@media(max-width:569px){
    flex-direction: column;
}
`
export const CourseBox = Styled.div`
display: flex;
align-items: center;
flex-direction: column;
border-radius: 5px;
border: 2px solid #000;
padding: 40px 0;
background: #EEF0F4;
position: relative;
z-index: 0;
@media(max-width:569px){
    padding: 0;
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
@media(max-width:569px){
 width: 100%;
 margin: 10px 0;
}
`
export const CourseHeader = Styled.div`
display: flex;
align-items: flex-start;
justify-content: space-between;
`



export const CourseTitle = Styled.h2`
font-size: 22px;
color:#000;
width: 70%;
margin: 0 0 10px 0;
font-family: 'Play','League Spartan', 'Roboto';
@media(max-width:569px){
    font-size: 24px;
   }
`

export const CourseCount = Styled.p`
color:#B286FD;
font-family: 'Play','League Spartan', 'Roboto';
margin: 0;
@media(max-width:569px){
    font-size: 20px;
   }
`
export const EachCourseBoxBottom = Styled.div`
display: flex;
align-items: center;
justify-content: space-between;
color:#000;
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
@media(max-width:569px){
    font-size: 35px;
    transform: rotate(-18deg);
    top: 18%;
    left: 36%;
}
`
