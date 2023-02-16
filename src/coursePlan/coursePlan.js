import Styled from 'styled-components'

export const CoursePlanBox = Styled.div`
display: flex;
align-items: center;
flex-direction: column;
color: #fff;
`
export const Container = Styled.div`
display: flex;
align-items: center;
flex-direction: column;
max-width: 880px;
`
export const MainCourseTitleBox = Styled.div`
display: flex;
width: 100%;
align-items: flex-start;
`
export const MainCourseTitle = Styled.h2`
margin: 30px 0;
font-family: 'Play','League Spartan', 'Roboto';
`

export const CoursesDateWrapper = Styled.div`
display: flex;
align-items:center;
flex-direction:column;
width:100%;
`
export const CourseDateBox1 = Styled.div`
position: relative;
display: flex;
width: 80%;
min-height:150px;
margin-right: auto;
flex-direction: row;
border: 2px solid #fff;
background: #EEF0F4;
padding: 20px 30px;
border-radius: 10px;
text-align:left;
*{
    color:#000 !important;
}
`
export const CourseDateBox2 = Styled.div`
position: relative;
display: flex;
min-height:150px;
width: 80%;
margin-left: auto;
margin-top: 110px;
text-align:left;
margin-bottom: 110px;
border: 5px solid #fff;
padding: 20px 30px;
border-radius: 10px;
flex-direction:row;
`
export const CourseDateTitle = Styled.h2`
color:#fff;
font-size: 35px;
font-family: 'Play','League Spartan', 'Roboto';
margin-right: 20px;
margin-bottom: 0px;
`
export const CourseDateName = Styled.p`
color: #fff;
font-family: 'League Spartan','Roboto','Play';
font-size: 20px;
width:45%;
font-weight: 300;
`
export const CourseDateWrapper = Styled.div`
flex-direction:row;
display:flex;
`
export const CourseDatewrapper = Styled.div`
width:25%;
`
export const CourseDateText = Styled.p`
color:#fff;
font-family: 'Play','League Spartan', 'Roboto';
width:50%;
font-size: 22px;
`
export const ABSimgRight = Styled.img`
position: absolute;
top:100%;
right: -18%;
color:#fff;
height: 70%;
width: 15%;
// @media(min-width:768px){
//     right: -18%;
//     width: 15%;
// }
`
export const ABSimgLeft = Styled.img`
top:75%;
left: -23%;
position: absolute;
color:#fff;
height: 100%;
width: 20%;
`