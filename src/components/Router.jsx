import React from "react";

import { Route, Switch } from "react-router-dom";

import Home from "./Home";

// PAY
import Externalization from "./Pay/Externalization";
import InternalManagement from "./Pay/InternalManagement";
import Audit from "./Pay/Audit";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/paie/externalisation" component={Externalization} />
      <Route path="/paie/gestion-interne" component={InternalManagement} />
      <Route path="/paie/audit" component={Audit} />
    </Switch>
  );
};

export default Router;
