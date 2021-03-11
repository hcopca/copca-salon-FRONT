import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Login from "./components/Login";
import NotFound from "./components/404/NotFound.js";
import Signup from "./components/Signup";
import Blog from "./components/Blog";
import Contacto from "./components/Contacto";
import Galeria from "./components/Galeria";
import { Dashboard } from "./components/Dashboard";
import { Salones } from "./components/Salones";
import { Extras } from "./components/Extras";
import { Eventos } from "./components/Eventos";
import { CrearSalon } from "./components/CrearSalon";
import { CrearExtra } from "./components/CrearExtra";
import { CrearEvento } from "./components/CrearEvento";
const createExtra = CrearExtra;
const Events = Eventos;
const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/blog" component={Blog} />
      <Route exact path="/contacto" component={Contacto} />
      <Route exact path="/galeria" component={Galeria} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/dashboard/salones" component={Salones} />
      <Route exact path="/dashboard/salones/crear" component={CrearSalon} />

      <Route exact path="/dashboard/extras" component={Extras} />
      <Route exact path="/dashboard/extras/crear" component={createExtra} />
      <Route exact path="/dashboard/eventos" component={Events} />
      <Route exact path="/dashboard/extras/crear" component={CrearEvento} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
