import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  color: red;
`; 

const MenuUl = styled.ul`
width: 100%;
margin: 0;
padding: 0;
`;

const MenuLi = styled.li`
position: relative;
list-style: none;
display: inline-block;
height: 48px;
padding: 0 10px;
`;

const Link = styled.a`
  color: #aaa;
  display: inline-block;
  padding: 8px 13px;
  line-height: 32px;
  text-decoration: none;
  text-align: left;
  -webkit-transition: color .2s ease-in-out;
  -moz-transition: color .2s ease-in-out;
  -o-transition: color .2s ease-in-out;
  -ms-transition: color .2s ease-in-out;
  transition: color .2s ease-in-out;
  &:hover {
    color: #F06000;
  }
`;

const menus = [
    {
        name : 'Home',
        link : '/'
    },
    {
        name : 'Contact',
        link : '/contact'
    },
    {
        name : 'About Us',
        link : '/about'
    }
]

const Header = () => {
  return (
    <Wrapper>
        <MenuUl>
            {menus.map((menu, index) => {
                return (
                <MenuLi key={`menu${index}`}>
                    <Link href= {menu.link}>{menu.name}</Link>
                </MenuLi>)
            })}
        </MenuUl>    
    </Wrapper>
  )
};

export default Header;