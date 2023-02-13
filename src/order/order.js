import Styled from 'styled-components'

// ORDER SECTION *************************
export const Container = Styled.div`
flex-direction: column;
display: flex;
margin: 0 auto;
width: 80%;
@media(max-width:569px){
    padding: 30px 0;
}
`

export const CourseOrder = Styled.div`
padding: 40px 0;
display:flex;
min-height: 50vh;
flex-direction: column;
font-family: 'Play','League Spartan', 'Roboto';
width: -webkit-fill-available;
background-image: url('${({background})=>background}');
background-repeat: no-repeat;
background-position: center;
background-size: cover;
`
export const CourseOrderTitle = Styled.h2`
color:#000;
margin: 30px 0;
font-size: 45px;
width: 50%;
@media(max-width:768px){
    font-size: 34px;
    width: 100%;
}
@media(max-width:569px){
    font-size: 22px;
}
`
export const CourseOrderBody = Styled.div`
display:flex;
align-items: flex-start;
justify-content: space-between;
@media(max-width:768px){
    flex-direction: column;
}
`
export const CourseOrderText = Styled.p`
color:#000;
margin: 0;
font-size:20px;
width:50%;
color: #000;
@media(max-width: 768px){
    margin: 0 0 20px 0;
    width: 90%;
    font-size: 24px;
}
@media(max-width:569px){
    margin: 0 0 20px 0;
    width: 100%;
    font-size: 14px;
}
`
export const CourseOrderList = Styled.span`
display:flex;
flex-direction: column;
@media(max-width: 768px){
font-size: 20px;
margin:0 0 30px 0;
}
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
