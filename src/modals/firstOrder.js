import Styled from 'styled-components'

export const ModalBox = Styled.div`
width: 100%;
height: 100%;
padding: 30px;
color:#000;
font-family: 'Play','League Spartan', 'Roboto';
border:1px solid #000;
border-radius:5px;
align-items: center;
display: flex;
flex-direction: column;

`

export const ModalBoxHeader = Styled.div`
width:100%;
display: flex;
justify-content: flex-end;
`

export const ModalCloseBtn = Styled.a`
color:#000;
font-size:30px;
cursor:pointer;

&:hover{
    color:#000;
}
`
export const ModalTextHeader = Styled.div`
width:75%;
display: flex;
align-items: center;
flex-direction: column;
text-align: center;
`
export const ModalTitle = Styled.h4`
color:#000;
width: 100%;
margin: 10px 0;
font-size:27px;
`
export const ModalText = Styled.p`
color:#000;
width: 90%;
margin: 10px 0;
font-size:18px;
`
export const ModalForm = Styled.form`
color:#000;
width: 100%;
margin: 0;
padding: 10px;
font-size:22px;
display: flex;
align-items: center;
flex-direction: column;
`

export const ModalInput = Styled.input`
color:#000;
width: 70%;
margin:  5px 0;
font-size:18px;
padding: 15px 0 0 0;
border-bottom: 1px solid #ccc;
border-top:none;
border-left:none;
border-right:none;
outline: none;
`

export const ModalSubmitBtn = Styled.a`
color:#000;
font-size:18px;
background: #B2F042;
padding: 10px;
font-weight:100;
margin-top: 30px;
cursor:pointer;
border: 1px solid #000;
text-decoration:none;
&:hover{
    color:#000;
}
`
