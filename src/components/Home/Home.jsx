import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to StartShips Web Site</h1>
        <ul>
          <li>
            <Link to="/Spaceships/2">Especifico</Link>
          </li>
          <li>
            <Link to="/SpaceshipsList">Lista</Link>
          </li>
          
        </ul>
      </div>
    );
  }
}