import React from 'react';

import SubNavWrapper from './SubNavWrapper';
import SubNav from './SubNav';

export default function Nav(props) {
  return (
    <SubNavWrapper>
      {props.products.map(product => <SubNav key={product.id} product={product}/>)}
    </SubNavWrapper>
  )
}