/* tslint:disable-next-line */
import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import { sum } from './foo';

render(
  <App message="world" />,
  document.getElementById('root'),
);

console.log(sum(1,2).toString());
