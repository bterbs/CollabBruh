/**
 * @jest-environment node
 */

 import React from 'react';
 import { shallow } from 'enzyme';

 import App from './components/App';

 const app = shallow(<App />);

 it('renders without crashing', () => {
  shallow(<App />);
 });
