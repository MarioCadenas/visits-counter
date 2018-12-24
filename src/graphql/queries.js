export const getVisitsQuery = gql => gql`
  query VisitsQuery {
    visits {
      id
      count
    }
  }
`;
