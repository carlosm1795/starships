import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SpaceshipsList from "../Spaceships/spaceshipsList.jsx";
import Spaceships from "../Spaceships/spaceships.jsx";



export default class Layout extends Component {
    render() {
      return (
        <div>
          
            <div>
              <Switch>
                
                <Route exact path="/SpaceshipsList" component={SpaceshipsList} />
                <Route exact path="/Spaceships/:id" component={Spaceships} />
              </Switch>
            </div>
       
        </div>
      );
    }
  }
