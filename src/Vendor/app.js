import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Layout  from "./../Components/Layout"
import Home    from "./../Pages/Home"
import About   from "./../Pages/About"
import Contact from "./../Pages/Contact"

const app = document.getElementById('app');

ReactDOM.render(
<Router history={hashHistory}>
  <Route path="/" component={Layout}>
    <IndexRoute component={Home}> </IndexRoute>
    <Route path="about" component={About}> </Route>
    <Route path="contact" component={Contact}> </Route>
  </Route>
</Router>, app);