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
padding-top: 10px;
`

export const NavLinkBox = Styled.div`
display: flex;
align-items:center; 
`

export const Logo = Styled.div`
width: 30px;
height: 30px;
background-size: contain;
background-color: #000;
background: url(${(props)=> props.imgUrl});
`

export const Navlink = Styled.a`
background: transparent;
font-family: 'League Spartan', 'Roboto';
display: flex;
align-items:center; 
text-decoration:none;
margin-left:  50px;
padding: 0;
font-weight:700;
border: none;
background: transparent;
color: #000;
&:hover{
    color: #000;
}
`