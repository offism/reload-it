import Styled from 'styled-components'

export const Container = Styled.div`
display: flex;
min-width: 880px;
margin: 0 auto;
justify-content: space-between;
`
export const Nav = Styled.div`
position: sticky;
top:0;
z-index:3;
display: flex;
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

export const Navlink1 = Styled.a``
export const Navlink = Styled.a`
background: transparent;
display: flex;
align-items:center; 
text-decoration:none;
margin-left:  50px;
color: #000;
transition: 5s ease all;
&:hover{
    border-bottom: 1px solid #000;
    color: #000;
}
`