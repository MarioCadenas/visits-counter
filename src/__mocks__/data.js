export const mockData = {
  loadingTrue: {
    loading: true,
  },
  loadingFalse: {
    loading: false,
  },
  emptyVisits: {
    visits: []
  },
  notEmptyVisits: {
    visits: [{ id: '123', count: 5 }]
  }
};
export const mockFunctions = {
  createVisit: jest.fn(() => ({ data: { createVisit: { count: 1 } } })),
  updateVisit: jest.fn(() => ({ data: { updateVisit: { count: mockData.notEmptyVisits.visits[0].count + 1 } } })),
};
