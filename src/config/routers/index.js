import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import Header from "../../components/header/header"
import Home from '../../pages/home'
import Detail from '../../pages/detail'

const Routers = () => {
  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route path="/detail">
            <Detail />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default Routers