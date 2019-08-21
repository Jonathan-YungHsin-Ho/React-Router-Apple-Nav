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
`;

export default function NavWrapper() {
  return (
    <div>
      <StyledNav>
        <NavButtons>
          <NavLink to='/'>AppleIcon</NavLink>
          {products.map(({page, id}) => (
            <NavLink key={id} to={`/${id}`}>{page}</NavLink>
          ))}
          <NavLink to='/'>Support</NavLink>
          <NavLink to='/'>SearchIcon</NavLink>
          <NavLink to='/'>ShopIcon</NavLink>
        </NavButtons>
      </StyledNav>
      {products.map(({page, id, products}) => 
        // console.log(page);
        <Route path={`'/:${id}'`} render={props => <Nav {...props} key={id} products={products} page={page} />} />
      )}

    {/* <Route path='/mac' render={props => <Nav {...props} key={products[0].id} products={products[0].products} page={products[0].name} /> } />

    <Route path='/ipad' render={props => <Nav {...props} key={products[1].id} products={products[1].products} page={products[1].name} /> } />

    <Route path='/iphone' render={props => <Nav {...props} key={products[2].id} products={products[2].products} page={products[2].name} /> } />

    <Route path='/watch' render={props => <Nav {...props} key={products[3].id} products={products[3].products} page={products[3].name} /> } />

    <Route path='/tv' render={props => <Nav {...props} key={products[4].id} products={products[4].products} page={products[4].name} /> } />

    <Route path='/music' render={props => <Nav {...props} key={products[5].id} products={products[5].products} page={products[5].name} /> } /> */}

    </div>
  )
}