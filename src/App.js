import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import Spaceships from "./components/Spaceships/spaceships.jsx";
import SpaceshipsList from "./components/Spaceships/spaceshipsList";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <BrowserRouter>
        <Home />
        <Route exact path="/Spaceships">
          <Spaceships />
        </Route>
        <Route exact path="/SpaceshipsList/:id">
          <SpaceshipsList />
        </Route>
      </BrowserRouter> */}
        <header>
          <nav>
            <ul>
              <li>
                <NavLink to="/Spaceships/15">SpaceShips</NavLink>
              </li>
              <li>
                <NavLink to="/SpaceshipsList">SpaceShips List</NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <div>
          <Route path="/Spaceships/:id" component={Spaceships} />
          <Route path="/SpaceshipsList" component={SpaceshipsList} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
