import Styled from 'styled-components'

export const Container = Styled.div`
display: flex;
margin: 0 auto;
width: 80%;
`
export const AUmain = Styled.div`  
display: flex;
padding: 30px;
min-height:90vh;
background: #262626;
color:#fff;
font-family: 'Play','League Spartan', 'Roboto';
` 

export const AUmainHeader = Styled.div`
width: 100%;
display:flex;
align-items:center;
justify-content: center;
`
export const AUmainHeaderBox = Styled.div` 
border: 2px solid #B2F042;
width:80%;
height:80%;
border-radius:8px;
display:flex;
align-items:center;
justify-content: center;
background-image: url('${({background})=>background}');
background-position: center;
background-size: cover;
background-repeat: no-repeat;
` 
export const AUmainHeaderTitle = Styled.h3`
font-size: 65px;
text-align: center;
color:#000;
text-shadow: 0 0 #fff;
`  