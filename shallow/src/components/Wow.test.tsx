/* tslint:disable-next-line */
import React from 'react';
/* tslint:disable-next-line */
import Enzyme, { shallow } from 'enzyme';
/* tslint:disable-next-line */
import Adapter from 'enzyme-adapter-react-16';
import Wow from './Wow';

Enzyme.configure({ adapter: new Adapter() });
it('shallow renders without crashing', () => {
  shallow(<Wow />);
});
