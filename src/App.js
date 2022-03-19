import React from 'react';
import GoogleAdsId from './GoogleAdsId';
// import Example from './GoogleAdsId';
import './style.css';

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <GoogleAdsId
        mask="___-___-____"
        placeholder="Google Ads Id"
        replacement={{ _: /\d/ }}
      />
      <p>Example Start editing to see some magic happen :)</p>

      {/* <Example /> */}
    </div>
  );
}
