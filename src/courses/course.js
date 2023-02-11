import Styled from 'styled-components'

export const Container = Styled.div`
display: flex;
min-width: 880px;
@media(max-width:569px){
    max-width: 520px;
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





