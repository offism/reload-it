import Styled from 'styled-components'

export const Container = Styled.div`
display: flex;
margin: 0 auto;
width: 80%;
`
export const DimBox = Styled.div`
width: -webkit-fill-available;
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
width: -webkit-fill-available;
position:absolute;
height: 30vh;
z-index:-1;
background-image: url('${({back})=>back}');
`

export const DimTitle = Styled.h2`
color: #B2F042;
width: 62%;
margin: 0;
font-size:55px;
font-family: 'Play','League Spartan', 'Roboto';
@media(max-width:992px){
    font-size: 34px;
}
@media(max-width:768px){
    font-size: 24px;
}
@media(max-width:569px){
    font-size: 17px;
}
@media(max-width:398px) {
    font-size: 13px;
}
`