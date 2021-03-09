import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Login from "./components/Login";
import NotFound from "./components/404/NotFound.js";
import Signup from "./components/Signup";
import Blog from "./components/Blog";
import Contacto from "./components/Contacto";
import Galeria from "./components/Galeria";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/blog" component={Blog} />
      <Route exact path="/contacto" component={Contacto} />
      <Route exact path="/galeria" component={Galeria} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
