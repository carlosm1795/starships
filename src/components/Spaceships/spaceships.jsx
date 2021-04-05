import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Spaceships extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    };
  }
  componentDidMount() {
    fetch(`https://www.swapi.tech/api/starships/${this.props.match.params.id}`)
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          isLoaded: true,
          items: result,
        });
      });
  }
  render() {
    if (!this.state.isLoaded) {
      return <div>Loading spaceship #{this.props.match.id}</div>;
    } else {
      return (
        <div>
          <h1>Spaceship #{this.state.items.result.uid}</h1>
          <ul>Name:{this.state.items.result.properties.name}</ul>
          <ul>MGLT:{this.state.items.result.properties.MGLT}</ul>
          <ul>
            Cargo Capacity:{this.state.items.result.properties.cargo_capacity}
          </ul>
          <ul>Consumables:{this.state.items.result.properties.consumables}</ul>
          <ul>
            Cost in Credits:{this.state.items.result.properties.cost_in_credits}
          </ul>
          <ul>Crew:{this.state.items.result.properties.crew}</ul>
        </div>
      );
    }
  }
}
