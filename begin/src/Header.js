import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>
        <h1>여가</h1>
      </Logo>
      <Nav>
        <NavList>
          <NavItem><NavLink href="/">홈</NavLink></NavItem>
          <NavItem><NavLink href="/about">소개</NavLink></NavItem>
          <NavItem><NavLink href="/services">서비스</NavLink></NavItem>
          <NavItem><NavLink href="/contact">연락처</NavLink></NavItem>
        </NavList>
      </Nav>
    </HeaderContainer>
  );
};

// styled-components로 스타일링
const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #333;
  color: white;
`;

const Logo = styled.div`
  h1 {
    font-size: 2rem;
    margin: 0;
  }
`;

const Nav = styled.nav``;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li``;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 1.2rem;

  &:hover {
    text-decoration: underline;
  }
`;

export default Header;
