import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Login from "./components/Login";
import NotFound from "./components/404/NotFound.js";
import Signup from "./components/Signup";
import Blog from "./components/Blog";
import Contacto from "./components/Contacto";
import Galeria from "./components/Galeria";
import SalonesCliente from "./components/SalonesCliente";
import EventosCliente from "./components/EventosCliente";
import { Dashboard } from "./components/Dashboard";
import { Salones } from "./components/Salones";
import { Extras } from "./components/Extras";
import { Eventos } from "./components/Eventos";
import { CrearSalon } from "./components/CrearSalon";
import { CrearExtra } from "./components/CrearExtra";
import { CrearEvento } from "./components/CrearEvento";
import { EditarSalon } from "./components/EditarSalon";
import { EditarEvento } from "./components/EditarEvento";
import { EditarExtra } from "./components/EditarExtra";

const createExtra = CrearExtra;
const createEvent = CrearEvento;
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
      <Route exact path="/all" component={SalonesCliente} />
      <Route exact path="/eventos" component={EventosCliente} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/dashboard/salones" component={Salones} />
      <Route exact path="/dashboard/salones/crear" component={CrearSalon} />
      <Route exact path="/dashboard/salones/edit/:id" component={EditarSalon} />

      <Route exact path="/dashboard/extras" component={Extras} />
      <Route exact path="/dashboard/extras/crear" component={createExtra} />
      <Route exact path="/dashboard/extras/edit/:id" component={EditarExtra} />

      <Route exact path="/dashboard/eventos" component={Events} />
      <Route exact path="/dashboard/eventos/crear" component={createEvent} />
      <Route
        exact
        path="/dashboard/eventos/edit/:id"
        component={EditarEvento}
      />

      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
