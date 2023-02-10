import Styled from 'styled-components'

export const Container = Styled.div`
display: flex;
width: 880px;
margin: 0 auto;
justify-content: space-between;
`
export const Nav = Styled.div`
position: sticky;
top:0;
z-index:4;
display: flex;
transition: 1s ease all;
color: #000;
background: #EEF0F4;
font-family: 'League Spartan', 'Roboto';
font-weight:700;
padding: 10px;
`

export const NavLinkBox = Styled.div`
display: flex;
align-items:center; 
`

export const Logo = Styled.img`
width: 50px;
height: 50px;
`

export const Navlink = Styled.a`
background: transparent;
font-family: 'League Spartan', 'Roboto';
display: flex;
align-items:center; 
text-decoration:none;
margin-left:  50px;
font-size:22px;
padding: 0;
font-weight:700;
border: none;
background: transparent;
color: #000;
&:hover{
    color: #000;
}
@media(max-width:768px) {
    display: none;
}

`

export const NavManu = Styled.div``
