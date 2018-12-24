import React from 'react';
import { shallow, mount } from 'enzyme';
import VisitsCounter from '../../components/VisitsCounter';
import { mockData, mockFunctions } from '../../__mocks__/data';

describe('Visits Counter component', () => {
   it('should correctly render Visits Counter component', () => {
    const { notEmptyVisits: { visits: [visit] } } = mockData;
    const { createVisit, updateVisit } = mockFunctions;
    const wrapper = shallow(
      <VisitsCounter
        visit={visit}
        createVisit={createVisit}
        updateVisit={updateVisit}
      />
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('h1').getElement()).toEqual(<h1>Visitas totales: 5</h1>);
  });
  it('should call createVisit when empty visit', () => {
    const { updateVisit, createVisit } = mockFunctions;
    mount(
      <VisitsCounter
        visit={undefined}
        createVisit={createVisit}
        updateVisit={updateVisit}
      />
    );
    expect(createVisit).toHaveBeenCalledWith({ variables: { count: 1 } });
    expect(createVisit).toHaveReturnedWith({ data: { createVisit: { count: 1 } } });
  });
  it('should call updateVisit when not empty visit', () => {
    const { notEmptyVisits: { visits: [visit] } } = mockData;
    const { updateVisit, createVisit } = mockFunctions;
    mount(
      <VisitsCounter
        visit={visit}
        createVisit={createVisit}
        updateVisit={updateVisit}
      />
    );
    expect(updateVisit).toHaveBeenCalledWith({ variables: { id: visit.id } });
    expect(updateVisit).toHaveReturnedWith({ data: { updateVisit: { count: visit.count + 1 } } });
  });
});
