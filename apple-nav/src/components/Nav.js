import React from 'react';
import styled from 'styled-components';

import SubNav from './SubNav';

const SubNavBkgd = styled.div`
  background: #f2f2f2;
  display: flex;
  justify-content: center;
`;

const SubNavWrapper = styled.div`
  padding: 12px 0;
  height: 116px;
  display: flex;
`;

export default function Nav(props) {
  return (
    <SubNavBkgd>
      <SubNavWrapper>
        {props.products.map(product => <SubNav key={product.id} product={product}/>)}
      </SubNavWrapper>
    </SubNavBkgd>
  )
}