import React, { Component } from 'react';

export default class VisitsCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.visit ? props.visit.id : null,
      count: props.visit ? props.visit.count : 0
    }
  }

  async componentDidMount() {
    const { props: { updateVisit, createVisit }, state: { id, count: currentCount } } = this;

    if (!id) {
      const { data: { createVisit: { count } } } = await createVisit({ variables: { count: currentCount + 1 } });
      return this.setState({ count });
    }

    const { data: { updateVisit: { count } } } = await updateVisit({ variables: { id } });
    return this.setState({ count });
  }

  render() {
    const { state: { count } } = this;
    return <h1>{`Visitas totales: ${count}`}</h1>
  }
}
