import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import { Index } from "./view/Index"
import { About } from "./view/About"
import { Daoscore } from "./view/Daoscore"
import { Detail } from "./view/Detail"


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Index />
        </Route>
        <Route path="/dao">
          <Daoscore />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/detail">
          <Detail />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
