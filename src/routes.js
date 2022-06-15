import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Bin2Dec from "./pages/Beginner/Bin2Dec";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/Bin2Dec" component={Bin2Dec} />
    </Switch>
  );
}
