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

// export default function Example() {
//   const modify = ({ unmaskedValue }) => {
//     console.log(unmaskedValue);
//     const newMask = unmaskedValue[0] === 7 ? '___-___-____' : undefined;
//     return { mask: newMask };
//   };

//   return (
//     <MaskField mask="___-___-____" replacement={{ _: /\d/ }} modify={modify} />
//   );
// }
