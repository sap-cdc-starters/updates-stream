import React from 'react';
// Add react-live imports you need here

import * as Gigya from "./gigya";
const ReactLiveScope = {
  ...Gigya,
  React,
  ...React,
};
export default ReactLiveScope;
