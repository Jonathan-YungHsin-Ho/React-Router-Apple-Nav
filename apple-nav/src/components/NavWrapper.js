import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import styled from 'styled-components';

import products from './products';

import Nav from './Nav';

const StyledNav = styled.nav`
  width: 100%;
  background-color: rgba(0, 0, 0, 0.8);
`;

const NavButtons = styled.div`
  max-width: 980px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 22px;

  a {
    color: #ffffff;
    font-size: 14px;
    line-height: 3.14286;
    font-weight: 200;
    letter-spacing: -.01em
    font-family: "SF Pro Text", "Myriad Set Pro", "SF Pro Icons", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
    text-decoration: none;
    padding: 0 10px;
    height: 44px;
    opacity: 1;
    transition: 0.2s;

    &:hover {
      opacity: 0.5;
    }
  }

  .active {
    opacity: 0.5;
  }
`;

export default function NavWrapper() {
  return (
    <div>
      <StyledNav>
        <NavButtons>
          <NavLink exact to='/'><i class='fab fa-apple fa-lg'></i></NavLink>
          {products.map(({page, id}) => (
            <NavLink key={id} to={`/${id}`}>{page}</NavLink>
          ))}
          <NavLink to='/'>Support</NavLink>
          <NavLink to='/'><i class="fas fa-search"></i></NavLink>
          <NavLink to='/'><i class="fas fa-shopping-bag"></i></NavLink>
        </NavButtons>
      </StyledNav>
      {products.map(page => 
        <Route path={`/${page.id}`} render={props => <Nav {...props} key={page.id} products={page.products} />} />
      )}

    </div>
  )
}