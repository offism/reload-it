import Styled from 'styled-components'

export const Container = Styled.div`
flex-direction:column;
display: flex;
margin: 0 auto;
width: 80%;
min-height: 100vh;
`
export const AUmain = Styled.div`  
position: relative;
box-sizing: border-box;
overflow: hidden;
z-index:-1;
display: flex;
padding: 30px;
min-height:100vh;
background: #262626;
color:#fff;
font-family: 'Play','League Spartan', 'Roboto';
` 

export const AUmainHeader = Styled.div`
width: 100%;
height:85vh;
display:flex;
align-items:center;
justify-content: center;
`
export const AUmainHeaderBox = Styled.div` 
position: relative;
z-index:2;
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
export const AUmainHeaderMarque1 = Styled.div`
position: absolute;
transform: rotate(25deg);
z-index:0;
width: 109%;
`
export const AUmainHeaderMarque2 = Styled.div`
transform: rotate(-25deg);
width: 110%;
z-index:0;
position: absolute;
`

export const AUmainBody = Styled.div`
min-height: 40vh;
padding: 20% 0;
`
export const AUmainBodyText1 = Styled.p`
width: 50%;
margin: 20px 0 10% 0;
margin-right: auto;
`
export const AUmainBodyText2 = Styled.p`
margin: 20px 0 10% 0;
width: 50%;
margin-left: auto;
`
