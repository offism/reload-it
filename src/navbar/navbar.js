import Styled from 'styled-components'

export const Nav = Styled.div`
display: flex;
position: sticky;
justify-content: space-around;
color: #000;
background: white;
font-family: 'League Spartan', 'Roboto';
font-weight:700;
padding: 10px;
`

export const NavLinkBox = Styled.div`
display: flex;
align-items:center; 
`

export const Logo = Styled.img`
width: 30px;
height: 30px;
`

export const Navlink = Styled.a`
background: transparent;
display: flex;
align-items:center; 
text-decoration:none;
margin: 0 10px;
color: #000;
transition: 5s ease all;
&:hover{
    border-bottom: 1px solid #000;
}
`