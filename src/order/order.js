import Styled from 'styled-components'

// ORDER SECTION *************************
export const Container = Styled.div`
display: flex;
min-width: 880px;
margin: 0 auto;
flex-direction: column;
`
export const CourseOrder = Styled.div`
display:flex;
min-height: 50vh;
flex-direction: column;
font-family: 'Play','League Spartan', 'Roboto';
`
export const CourseOrderBox = Styled.div`
position: absolute;
left: 0;
width: 1299px;
min-height: 100vh;
z-index: -1;
background: #B2F042;
`
export const CourseOrderTitle = Styled.h2`
color:#000;
margin: 30px 0;
font-size: 40px;
width: 40%;
`
export const CourseOrderBody = Styled.div`
display:flex;
align-items: flex-start;
justify-content: space-between;
`
export const CourseOrderText = Styled.p`
color:#000;
margin: 0;
width:40%;
`
export const CourseOrderList = Styled.span`
display:flex;
flex-direction: column;

`
export const Icon = Styled.span`
color: #B286FD;
font-size:22px;
`
export const CourseOrderListItem = Styled.span`
`
