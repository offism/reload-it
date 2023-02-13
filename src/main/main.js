import Styled from 'styled-components'

export const MainBox = Styled.div`
display: flex;
flex-direction: column;
height: 100vh;
align-items: center;
justify-content: center;
position: sticky;
top: 80px;
z-index: 0;
`
export const MainMiniBox = Styled.div`
display: flex;
flex-direction: column;
align-items: start;
width:65%;
`

export const MainTitle = Styled.h1`
font-size: 84px;
color: #000;
letter-spacing: 5px;
font-family: 'Play','League Spartan', 'Roboto';
font-weight:900;
margin-bottom: 30px;
@media(max-width:768px){
    font-size:65px;
}
@media(max-width:569px){
    font-size:45px;
}
`

export const InputWrapper = Styled.div`
display: flex;
width: 70%;
align-items: center;
position: relative;
`

export const MainInput = Styled.input`
font-size: 17px;
color: #000;
padding: 10px 32px 10px 25px;
width:100%;
border-radius: 8px;
font-family: 'Play','League Spartan', 'Roboto';
position: relative;
outline: none;
`

export const Label = Styled.label`
position: absolute;
right: 15px;
cursor: pointer;
z-index:2;
`
export const Icon = Styled.span`
color: #B2F042`


export const Lenta = Styled.div`
font-family: 'Play', 'League Spartan', 'Roboto';
display: flex;
align-items: center;
width: 1301px;
margin: 70px 0;
padding: 10px 0;
border-top: 1px solid #000; 
border-bottom: 1px solid #000; 
`
export const MainLenta = Styled.h4`
margin: 0 11px;
font-family: 'Play', 'League Spartan', 'Roboto';
font-size:16px;
`
export const MainText = Styled.small`
font-family: 'Play', 'League Spartan', 'Roboto';
color:#797979;
font-size:19px;
@media(max-width:768px){
    font-size: 19px;
}
@media(max-width:569px){
    font-size: 14px;
}
@media(max-width:398px) {
    font-size: 9px;
  }
`

