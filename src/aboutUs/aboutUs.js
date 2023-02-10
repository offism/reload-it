import Styled from 'styled-components'

export const Container = Styled.div`
display: flex;
align-items: center;
flex-direction: column;
max-width: 880px;
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
`
export const AboutUsTextBox = Styled.div`
width: 50%;
padding: 100px 0;
`
export const AboutUsVideoBox = Styled.div`
width: 50%;
background: #ccc;
`
export const AboutUsMainTitle = Styled.h5``

export const AboutUsTitle = Styled.h4`
margin: 10px 0 30px 0;
`
export const AboutUsText = Styled.p`
width: 90%;
font-size:20px;
font-family: 'League Spartan', 'Roboto','Play';
`
export const AboutUsBtn = Styled.button`
padding: 10px;
color: #EEF0F4;
background: #000;
`
