import React from 'react';
import { shallow, mount } from 'enzyme';
import { VisitsPage } from '../../components/Visits';
import { mockData, mockFunctions } from '../../__mocks__/data';

describe('Visits Component', () => {
  it('should correctly render visit component when loading', () => {
    const { loadingTrue, emptyVisits } = mockData;
    const { createVisit, updateVisit } = mockFunctions;
    const wrapper = shallow(
      <VisitsPage
        getVisits={{ ...loadingTrue, ...emptyVisits }}
        createVisit={createVisit}
        updateVisit={updateVisit}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should correctly render visit component when not loading', () => {
    const { loadingFalse, notEmptyVisits } = mockData;
    const { createVisit, updateVisit } = mockFunctions;
    const wrapper = shallow(
      <VisitsPage
        getVisits={{ ...loadingFalse, ...notEmptyVisits }}
        createVisit={createVisit}
        updateVisit={updateVisit}
      />
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.prop('createVisit')).toEqual(createVisit);
    expect(wrapper.prop('updateVisit')).toEqual(updateVisit);
  });
  it('should call createVisit when empty visits', () => {
    const { loadingFalse, emptyVisits } = mockData;
    const { createVisit, updateVisit } = mockFunctions;
    mount(
      <VisitsPage
        getVisits={{ ...loadingFalse, ...emptyVisits }}
        createVisit={createVisit}
        updateVisit={updateVisit}
      />
    );
    expect(createVisit).toHaveBeenCalledWith({ variables: { count: 1 } });
  });
  it('should call updateVisit when visits counter exists', () => {
    const { loadingFalse, notEmptyVisits } = mockData;
    const { createVisit, updateVisit } = mockFunctions;
    mount(
      <VisitsPage
        getVisits={{ ...loadingFalse, ...notEmptyVisits }}
        createVisit={createVisit}
        updateVisit={updateVisit}
      />
    );
    expect(updateVisit).toHaveBeenCalledWith({ variables: { id: notEmptyVisits.visits[0].id } });
  });
});
