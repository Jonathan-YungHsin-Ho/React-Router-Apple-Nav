import React from 'react';
import styled from 'styled-components';

const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Icon = styled.div`
  width: 50px;
  height: 54px;
  border: 1px solid #111111;
  margin-bottom: 6px;
`;

const ProductName = styled.p`
  font-size: 11px;
  text-align: center;
`;

const NewProduct = styled.p`
  color: #ef5602;
  font-size: 9px;
  text-align: center;
`;

const ProductLink = styled.a`
  color: #111111;
  text-decoration: none;

  &:hover {
    color: #0070c9;
  }
`;

export default function SubNav(props) {
  return (
    <Center>
      <Icon />
      <ProductName><ProductLink href={props.product.url}>{props.product.name}</ProductLink></ProductName>
      <NewProduct>{props.product.new && 'New'}</NewProduct>
    </Center>
  )
}