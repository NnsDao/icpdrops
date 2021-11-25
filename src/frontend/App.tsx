import React from "react"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom"
import { Index } from "./view/Index"
import { About } from "./view/About"
import { Daoscore } from "./view/Daoscore"
import { Detail } from "./view/Detail"
import { DataCenter } from "./view/dataCenter/Index"
import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {
  return (
    <Router>

      <Header />
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
        <Route path="/dataCenter">
          <DataCenter />
        </Route>
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
