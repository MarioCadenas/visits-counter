import React from 'react';
import { shallow } from 'enzyme';
import { ServerUnreachable } from '../../components/ServerUnreachable';

describe('Server Unreachable Component', () => {
  it('should correctly render ServerUnreachable component', () => {
    const wrapper = shallow(<ServerUnreachable />);
    expect(wrapper).toMatchSnapshot();
  });
});
