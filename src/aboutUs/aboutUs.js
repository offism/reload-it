import Styled from 'styled-components'

export const Container = Styled.div`
display: flex;
align-items: center;
margin: 0 auto;
flex-direction: column;
max-width: 80%;
height: 100%;
`
export const AboutUsBox = Styled.div`
min-height: 70vh;
width: 100%;
background: #EEF0F4;
position: relative;
color:#000;
z-index:-1;
font-family: 'Play','League Spartan', 'Roboto';
`
export const AboutUsWrapper = Styled.div`
height: 100%;
width: 100%;
display: flex;
@media(max-width:992px){
   padding:100px 0;
}
@media(max-width:768px){
    padding: 0;
    flex-direction: column;
}
`
export const AboutUsTextBox = Styled.div`
width: 50%;
padding: 100px 0;
@media(max-width:992px){
    padding: 0;
}
@media(max-width:768px){
    padding: 100px 0;
    width: -webkit-fill-available;
}

`
export const AboutUsVideoBox = Styled.div`
width: 50%;
background: #000;
@media(max-width:768px){
    width: -webkit-fill-available;
    margin-bottom: 15%;
}

`
export const AboutUsMainTitle = Styled.h5`
font-size: 30px;
`

export const AboutUsTitle = Styled.h4`
margin: 10px 0 30px 0;
font-size: 30px;
@media(max-width:398px) {
    font-size: 23px;
}
`
export const AboutUsText = Styled.p`
width: 90%;
font-size: 30px;
font-family: 'League Spartan','Roboto','Play';
margin-bottom: 30px;
@media(max-width: 992px) {
      font-size: 23px;
  }
@media(max-width:398px) {
      font-size: 20px;
  }
`
export const AboutUsBtn = Styled.button`
padding: 10px;
color: #EEF0F4;
background: #000;
`
