import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Layout  from "./../Components/Layout"
import Home    from "./../Pages/Home"
import Inventory   from "./../Pages/Inventory"
import Settings from "./../Pages/Settings"

const app = document.getElementById('app');

ReactDOM.render(
<Router history={hashHistory}>
  <Route path="/" component={Layout}>
    <IndexRoute component={Home}> </IndexRoute>
    <Route path="inventory" component={Inventory}> </Route>
    <Route path="settings" component={Settings}> </Route>
  </Route>
</Router>, app);