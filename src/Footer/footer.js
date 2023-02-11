import Styled from 'styled-components'

export const Container = Styled.div`
display: flex;
margin: 0 auto;
max-width: 880px;
@media(max-width:569px){
    max-width: 520px;
    padding: 30px 0;
}
`

export const FooterBox = Styled.div`
display: flex;
border-radius: 5px;
font-size:30px;
background: #262626;
min-height: 40vh;
color:white;
position: relative;
z-index: 0;
font-family: 'Play','League Spartan', 'Roboto';

`
export const FooterHead = Styled.div`
flex-direction: column;
width: 100%;
align-items: flex-start;
display: flex;
`

export const PhoneLabel = Styled.label`
color: #9E9E9E;
margin-bottom: 5px;
font-size: 18px;
@media(max-width:569px){
    margin-bottom: 0;
}
`
export const FooterHeadBody = Styled.div`
display: flex;
align-items: center;
flex-direction: row;
justify-content: space-between;
width: 100%;
`
export const ContactData = Styled.p`
margin: 0;
font-size: 18px;
`
export const Email = Styled.p`
color:#B286FD;
margin: 0;
font-size:22px;
`
export const SocialNetworks = Styled.div`
`
export const SocialNetwork = Styled.a`
margin-left: 10px;
cursor:pointer;
color: #B2F042;
font-size: 18px;
text-decoration: none;
&:hover{
    color: #B2F042;
}
`

export const FooterBoot = Styled.div`
display: flex;
align-items: center;
flex-direction: row;
justify-content: space-between;
width: 100%;
`

export const FooterBootBody = Styled.div`
`
export const FooterBootTitle = Styled.h2`
font-size: 93px;
color: #5c5c5c;
margin: 10px 0;
@media(max-width:569px){
    font-size: 55px;
}
`
