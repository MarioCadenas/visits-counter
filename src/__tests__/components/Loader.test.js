import React from 'react';
import { shallow } from 'enzyme';
import { Loader } from '../../components/Loader';

describe('Loader Component', () => {
  it('should correctly render loader component', () => {
    const wrapper = shallow(<Loader />);
    expect(wrapper).toMatchSnapshot();
  });
});
