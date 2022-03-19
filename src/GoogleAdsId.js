import React from 'react';
import { MaskField } from 'react-mask-field';

export default function GoogleAdsId(props) {
  return (
    <MaskField
      mask={props.mask}
      replacement={props.replacement}
      placeholder={props.placeholder}
    />
  );
}
