import Styled from 'styled-components'

// ORDER SECTION *************************
export const Container = Styled.div`
display: flex;
width: 80%;
margin: 0 auto;
flex-direction: column;
align-items: center;
@media(max-width:398px){
    width: 90%;
}
`
export const EachCourseBox = Styled.div`
font-family: 'Play','League Spartan', 'Roboto';
background: #262626;
min-height:90vh;
border-radius: 5px;
color:#fff;
padding: 35px 30px;
position: relative;
z-index:0;
text-align:center;
display: flex;
align-items: flex-start;
`
export const ChevronLeftBtn = Styled.a`
position: absolute;
top: 30px;
left: 30px;
font-size:38px;
color:white;
&:hover
{
    color:white;
}
@media(max-width:398px){
    top: 20px;
    left: 10px;
}
`
export const EachCourseHeader = Styled.div`
width:60%;
@media(max-width:398px){
    width:100%;
}
`
export const EachCourseMainTitle = Styled.h2`
font-size:54px;
margin-bottom: 30px;
@media(max-width:398px){
    font-size:22px;
    margin-bottom: 10px;
}
`
export const EachCourseMainText = Styled.p`
font-size: 19px;
@media(max-width:398px){
    font-size: 16px;
    margin: 0;
}
`
export const EachCourseMainBtn = Styled.a`
padding: 13px;
background: #B2F042;
color:#000;
text-decoration:none;
border:none;
cursor:pointer;
margin: 20px 0 60px 0;
display: inline-block;
&:hover{
    color:#000;
}
@media(max-width:398px){
    padding: 9px;
    margin: 20px 0;
}
`
export const EachCourseBody = Styled.div`
width:100%;
display: flex;
flex-direction: column;
`
export const EachCourseBodyHead = Styled.div`
display: flex;
margin-bottom: 30px;
`
export const EachCourseBodyHeadItem = Styled.div`
width:33.3%;
border:2px solid #fff;
padding: 33px 60px;
font-size:30px;
@media(max-width:398px){
    padding: 10px 5px;
    font-size: 13px;
    display: flex;
    align-items: center;
}
`
export const EachCourseBodyBoot = Styled.div`
background: #EEF0F4;
border-radius:20px;
padding: 50px 40px 40px 40px;
color:#000;
text-align:left;
border: 2px solid #B286FD;
@media(max-width:398px){
padding: 25px;
}
`
export const Icon = Styled.span`
color:#B286FD;
`
export const EachCourseBodyBootTitle = Styled.h4`
font-size:24px;
margin: 10px 0 30px 0;
@media(max-width:398px){
    font-size:14px;
    }
`
export const EachCourseBodyBootTextItem = Styled.p`
@media(max-width:398px){
    font-size:14px;
    }`
export const EachCourseBodyFooter = Styled.div``
export const EachCourseBodyFooterHead = Styled.div`
display: flex;
justify-content: space-between;
margin: 40px 0;
`