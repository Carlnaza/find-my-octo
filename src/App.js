import React from 'react'
import { Route, Switch } from 'react-router-dom'

// Pages
import Home from './pages/Home/Home.js'
import User from './pages/User/User.js'
import NotFound from './pages/NotFound/NotFound.js'

export default function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={Home} />
        <Route exact path="/user/:username" component={User} />
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </>
  );
}


