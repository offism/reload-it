import Styled from 'styled-components'

export const Container = Styled.div`
flex-direction:column;
display: flex;
margin: 0 auto;
width: 80%;
min-height: 100vh;
@media(max-width:569px){
    width: 100%;
}
`
export const AUmain = Styled.div`  
position: relative;
box-sizing: border-box;
overflow: hidden;
z-index: 0;
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
@media(max-width:569px){
    width: 90%;
    height: 75%;
}
@media(max-width:398px){
    width: 84%;
    height: 70%;
}
    ` 
export const AUmainHeaderTitle = Styled.h3`
font-size: 65px;
text-align: center;
color:#000;
text-shadow: 0 0 #fff;
@media(max-width:569px){
    font-size: 40px;
    }
@media(max-width:398px){
    font-size: 35px;
    }
`  
export const AUmainHeaderMarque1 = Styled.div`
position: absolute;
transform: rotate(25deg);
z-index:0;
width: 113%;
`
export const AUmainHeaderMarque2 = Styled.div`
transform: rotate(-25deg);
width: 113%;
z-index:0;
position: absolute;
`

export const AUmainBody = Styled.div`
min-height: 40vh;
padding: 10% 0 5% 0;
`
export const AUmainBodyText1 = Styled.p`
width: 50%;
margin: 20px 0 10% 0;
margin-right: auto;
@media(max-width:569px){
    width: 100%;
}
`
export const AUmainBodyHR = Styled.hr`
display: none;
@media(max-width:569px){
    display: flex;
}
`
export const AUmainBodyText2 = Styled.p`
margin: 20px 0 10% 0;
width: 50%;
margin-left: auto;
@media(max-width:569px){
    width: 100%;
}
`
export const AUmainSlider = Styled.div`
padding: 10% 0;
min-height: 100vh;
@media(max-width:569px){
    padding: 0;
    min-height: 80vh;
}
`
export const AUmainSliderTextWrapper = Styled.div`
display:flex;
flex-direction:column;
padding: 0 20px;
@media(max-width:569px){
    padding: 20px;
}
`

export const AUmainSliderImg = Styled.img`
@media(max-width:569px){
    height: 60%;
    width:100%;
    border-bottom-left-radius: 0px;
    object-fit: cover;
    border-top-left-radius: 19px;
    border-top-right-radius: 19px;
}
@media(max-width:398px){
    height: 50%;
}
    `
export const AUmainSliderTitle = Styled.h6`
text-align:left;
font-size: 22px;
margin-bottom:5%;
`
export const AUmainSliderText = Styled.p`
text-align:left;
margin:0;
font-size: 17px;
font-weight: 100;
font-family: 'League Spartan', 'Roboto','Play';

`
