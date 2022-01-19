import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Link  
} from "react-router-dom";
import Home from "./Components/Home";
import Four from "./Components/Four";
import Hello from "./Components/Hello";
import HelloBlueRed from "./Components/HelloBlueRed";
    
function App() {
  return (
    <BrowserRouter>
      <h1>Routing Example</h1>
      {/* <p>
        <Link to="/">Home</Link>
        &nbsp;|&nbsp;
        <Link to="/hello">Hello</Link>
        &nbsp;|&nbsp;
        <Link to="/4">Four</Link>
        &nbsp;|&nbsp;
        <Link to="/hello/blue/red">HelloBlueRed</Link>   
      </p> */}
      <Switch>
        <Route path="/:word/:color1/:color2">
          <HelloBlueRed />
        </Route>
        <Route path="/word/:word">
          <Hello />
        </Route>
        <Route path="/:number">
          <Four />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
    
export default App;

