import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";

import BeginnerRoutes from "./beginner.routes";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/Bin2Dec" component={BeginnerRoutes.Bin2Dec} />
      <Route
        path="/BorderRadiusPreviewer"
        component={BeginnerRoutes.BorderRadiusPreviewer}
      />
      <Route path="/Calculator" component={BeginnerRoutes.Calculator} />
      <Route path="/CauseEffect" component={BeginnerRoutes.CauseEffect} />
      <Route
        path="/ChristmasLights"
        component={BeginnerRoutes.ChristmasLights}
      />
      <Route path="/ColorCycle" component={BeginnerRoutes.ColorCycle} />
      <Route path="/CountdownTimer" component={BeginnerRoutes.CountdownTimer} />
    </Switch>
  );
}
