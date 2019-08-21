import React from 'react';
import styled from 'styled-components';

import SubNav from './SubNav';

const SubNavWrapper = styled.div`
  background: #f2f2f2;
  padding: 12px 0;
  height: 116px;
  display: flex;
  justify-content: space-around;
`;

export default function Nav(props) {
  return (
    <SubNavWrapper>
      {props.products.map(product => <SubNav key={product.id} product={product}/>)}
    </SubNavWrapper>
  )
}