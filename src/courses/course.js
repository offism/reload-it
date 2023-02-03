import Styled from 'styled-components'

export const Icon = Styled.span`
color: #B2F030;
font-size:32px;
`
export const IconX = Styled.span`
color: #000;
font-size:32px;
cursor:pointer;
`

export const Container = Styled.div`
display: flex;
align-items: center;
flex-direction: column;

max-width: 880px;
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
`
export const MainCourseTitleBox = Styled.div`
display: flex;
width: 100%;
align-items: flex-start;
`
export const MainCourseTitle = Styled.h2`
color:#000;
margin: 30px 0;
font-family: 'Play','League Spartan', 'Roboto';
`

export const CoursesBox = Styled.div`
display: flex;
width:100%;
`
export const CourseHeader = Styled.div`
display: flex;
align-items: flex-start;
justify-content: space-between;
`
export const EachCourseBox = Styled.a`
display: flex;
width:300px;
min-height: 160px;
border-radius: 5px;
padding: 20px 15px;
text-decoration: none;
flex-direction:column;
border: 2px solid #000;
transition: .3s ease all;
`


export const CourseTitle = Styled.h2`
font-size: 22px;
color:#000;
width: 70%;
margin: 0 0 10px 0;
font-family: 'Play','League Spartan', 'Roboto';
`

export const CourseCount = Styled.p`
color:#B286FD;
font-family: 'Play','League Spartan', 'Roboto';
margin: 0;
`
export const EachCourseBoxBottom = Styled.div`
display: flex;
align-items: center;
justify-content: space-between;
color:#000;
`

export const CourseDuration = Styled.p`
font-family: 'Play','League Spartan', 'Roboto';
margin: 0;
`
export const DimBox = Styled.div`
margin: 90px 0;
align-items:center;
display: flex;
height: 20vh;
color: #B2F042;
justify-content: center;
`
export const DimBottom = Styled.div`
display: flex;
justify-content: space-between;
align-items:center;
`

export const DimFone = Styled.div`
position:absolute;
height: 30vh;
z-index:-1;
width:1301px;
background: url('https://catherineasquithgallery.com/uploads/posts/2021-03/1614627039_23-p-fon-dim-dlya-fotoshopa-29.jpg') no-repeat center center;
`

export const DimTitle = Styled.h2`
color: #B2F042;
width: 62%;
margin: 0;
font-size:50px;
font-family: 'Play','League Spartan', 'Roboto';
`

export const DimBtn = Styled.a`
color: #B2F042;
font-size:24px;
font-family: 'Play','League Spartan', 'Roboto';
border: 2px solid #B2F042;
padding:10px;
transition: .3s ease all;
cursor:pointer;
text-decoration: none;
&:hover{
    color: #000;
    background:#B2F042;
}
`
export const CoursesDateWrapper = Styled.div`
display: flex;
align-items:center;
flex-direction:column;
width:100%;
`

export const CoursesDateBox1 = Styled.div`
display: flex;
align-items:center;
width:100%;
justify-content: space-between;

`
export const CoursesDateBox2 = Styled.div`
width:100%;
display: flex;
align-items:center;
justify-content: space-between;
margin: 30px 0;
`
export const CourseDateBox = Styled.a`
display: flex;
align-items: flex-start;
border: 2px solid #000;
text-decoration: none;
padding: 20px 30px;
border-radius: 10px;
min-height: 250px;
min-width: 170px;
flex-direction:column;
justify-content: flex-start;
cursor:pointer;
transition: .3s ease all;
&:hover{
    background:#B286FD;
    *{
        color:  white !important;
    }
}
`
export const CourseDateTitle = Styled.h2`
color:#000;
margin-right: auto;
font-size: 30px;
font-family: 'Play','League Spartan', 'Roboto';
`
export const CourseDateName = Styled.h4`
color: #000;
font-family: 'Play','League Spartan', 'Roboto';
width: 90%;
margin:0 auto 0 0;
font-size: 20px;
`
export const CourseDateWrapper = Styled.div`
flex-direction:row;
display:flex;
`
export const CourseDatewrapper = Styled.div`
`
export const CourseDateText = Styled.p`
color:#000;
font-family: 'Play','League Spartan', 'Roboto';
width:60%;
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
`




