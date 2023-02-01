import Styled from 'styled-components'

// ORDER SECTION *************************

export const CourseOrder = Styled.div`
display:flex;
min-height: 50vh;
flex-direction: column;
font-family: 'Play','League Spartan', 'Roboto';
`
export const CourseOrderBox = Styled.div`
position: absolute;
left: 0;
width: 100vw;
min-height: 70vh;
z-index: -1;
background: linear-gradient(45deg,#B2F042 17%,white 36%,#B2F042 72%);
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
export const CourseOrderBtn = Styled.a`
display: inline-block;
background: #000;
padding: 15px;
color:white;
width: fit-content;
cursor: pointer;

`