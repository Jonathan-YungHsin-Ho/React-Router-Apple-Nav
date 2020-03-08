import React from 'react';
import styled from 'styled-components';

const ProductLink = styled.a`
  color: #111111;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
`;

const Icon = styled.div`
  width: 50px;
  height: 54px;
  margin-bottom: 6px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const ProductName = styled.p`
  font-size: 11px;
  text-align: center;

  &:hover {
    color: #0070c9;
  }
`;

const NewProduct = styled.p`
  color: #ef5602;
  font-size: 9px;
  text-align: center;
`;

export default function SubNav(props) {
  return (
    <div>
      <ProductLink href={props.product.url}>
        <Icon><i class={props.product.icon}></i></Icon>
        <ProductName>{props.product.name}</ProductName>
        <ProductName>{props.product.extratext}</ProductName>
        <NewProduct>{props.product.new && 'New'}</NewProduct>
      </ProductLink>
    </div>
  )
}