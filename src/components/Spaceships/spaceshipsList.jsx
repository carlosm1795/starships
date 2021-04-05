import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class SpaceshipsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    fetch("https://www.swapi.tech/api/starships/")
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          isLoaded: true,
          items: result,
        });
      });
  }
  render() {
    console.log(this.state.items);
    if (!this.state.isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {this.state.items.results.map((item) => (
            <li key={item.uid}>
              {item.name}
              <Link to={`/Spaceships/${item.uid}`}>More Information</Link>
            </li>
          ))}
        </ul>
      );
    }
  }
}
