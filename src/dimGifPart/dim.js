import Styled from 'styled-components'

export const Container = Styled.div`
display: flex;
margin: 0 auto;
max-width: 880px;
@media(max-width:569px){
    max-width: 520px;
}
`
export const DimBox = Styled.div`
margin: 90px 0 30px;
position: relative;
z-index:1;
align-items:center;
display: flex;
height: 20vh;
color: #B2F042;
justify-content: center;
`
export const DimBottom = Styled.div`
display: flex;
justify-content: space-between;
align-items:center;
`

export const DimFone = Styled.div`
position:absolute;
height: 30vh;
z-index:-1;
width:1301px;
background-image: url('${({back})=>back}');
`

export const DimTitle = Styled.h2`
color: #B2F042;
width: 62%;
margin: 0;
font-size:50px;
font-family: 'Play','League Spartan', 'Roboto';
`