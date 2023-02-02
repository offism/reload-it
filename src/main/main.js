import Styled from 'styled-components'

export const MainBox = Styled.div`
display: flex;
flex-direction: column;
height: 100vh;
align-items: center;
justify-content: center;
`
export const MainMiniBox = Styled.div`
display: flex;
flex-direction: column;
align-items: start;
width:60%;
`

export const MainTitle = Styled.h1`
font-size: 84px;
color: #000;
letter-spacing: 5px;
font-family: 'Play','League Spartan', 'Roboto';
font-weight:900;
margin-bottom: 50px;
`

export const InputWrapper = Styled.div`
display: flex;
width: 53%;
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
width: 100vw;
margin: 70px 0;
padding: 10px 0;
border-top: 1px solid #000; 
border-bottom: 1px solid #000; 
`
export const MainLenta = Styled.h4`
margin: 0 12px;
font-size:16px;
`

