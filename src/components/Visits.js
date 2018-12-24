import React, { Component } from 'react';
import { gql } from 'apollo-boost';
import { graphql, compose } from 'react-apollo';
import { Loader } from './Loader';
import { getVisitsQuery } from '../graphql/queries';
import { updateVisitMutation, createVisitMutation } from '../graphql/mutations';
import VisitsCounter from './VisitsCounter';

export class VisitsPage extends Component {
  render() {
    if (this.props.getVisits.loading) {
      return <Loader />;
    }

    const { props: { getVisits: { visits: [visit] } } } = this;

    return (
      <VisitsCounter
        visit={visit}
        createVisit={this.props.createVisit}
        updateVisit={this.props.updateVisit}
      />
    )
  }
}

export default compose(
  graphql(getVisitsQuery(gql), { name: 'getVisits' }),
  graphql(createVisitMutation(gql), { name: 'createVisit' }),
  graphql(updateVisitMutation(gql), { name: 'updateVisit'})
)(VisitsPage);
