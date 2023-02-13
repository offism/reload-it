import Styled from 'styled-components'

export const Container = Styled.div`
display: flex;
margin: 0 auto;
width: 80%;
@media(max-width:992px){
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

export const EachCourseBoxMiddle = Styled.div`
margin: 0 auto;
display: flex;
width:300px;
min-height: 160px;
border-radius: 5px;
padding: 20px 15px;
text-decoration: none;
flex-direction:column;
border: 2px solid #000;
transition: .3s ease all;
@media(max-width: 992px){
    margin-top: 10px;
    margin-left:auto;
    margin-bottom: 10px;
    margin-right: 0;
}
@media(max-width:768px){
    width: 100%;
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
    transform: rotate(-22deg);
    top: 20%;
    left: 27%;
}
@media(max-width:768px){
font-size: 50px;
    transform: rotate(-18deg);
    top: 20%;
    left: 32%;
}
`
