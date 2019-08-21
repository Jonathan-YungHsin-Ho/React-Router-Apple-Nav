import React from 'react';

import SubNavWrapper from './SubNavWrapper';
import SubNav from './SubNav';

export default function Nav(props) {
  console.log(props.products)
  return (
    <SubNavWrapper>
      {props.products.map(product => <SubNav product={product}/>)}
    </SubNavWrapper>
  )
}