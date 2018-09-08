import React from 'react';
import ReactDOM from 'react-dom';
import D_App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<D_App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
