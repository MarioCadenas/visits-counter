export const updateVisitMutation = gql => gql`
  mutation UpdateVisit($id: ID!) {
    updateVisit(id: $id) {
      id
      count
    }
  }
`;

export const createVisitMutation = gql => gql`
  mutation CreateVisit{
    createVisit(count: 1) {
      id
      count
    }
  }
`;
