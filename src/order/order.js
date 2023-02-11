import Styled from 'styled-components'

// ORDER SECTION *************************
export const Container = Styled.div`
flex-direction: column;
display: flex;
margin: 0 auto;
width: 80%;
padding: 20px 0;
@media(max-width:569px){
    padding: 30px 0;
}
`

export const CourseOrder = Styled.div`
display:flex;
min-height: 50vh;
flex-direction: column;
font-family: 'Play','League Spartan', 'Roboto';
width: -webkit-fill-available;
`
export const CourseOrderBox = Styled.div`
position: absolute;
left: 0;
width: -webkit-fill-available;
min-height: 100vh;
z-index: -1;
background: #B2F042;
`
export const CourseOrderTitle = Styled.h2`
color:#000;
margin: 30px 0;
font-size: 24px;
width: 50%;
@media(max-width:569px){
    width: 100%;
}
`
export const CourseOrderBody = Styled.div`
display:flex;
align-items: flex-start;
justify-content: space-between;
@media(max-width:569px){
    flex-direction: column;
}
`
export const CourseOrderText = Styled.p`
color:#000;
margin: 0;
font-size:20px;
width:50%;
color: #000;
@media(max-width:569px){
    margin: 0 0 20px 0;
    width: 100%;
    font-size: 14px;
}
`
export const CourseOrderList = Styled.span`
display:flex;
flex-direction: column;
@media(max-width:569px){
font-size: 14px;
margin:0 0 30px 0;
}
`
export const Icon = Styled.span`
color: #B286FD;
font-size:22px;
`
export const CourseOrderListItem = Styled.span`
`
