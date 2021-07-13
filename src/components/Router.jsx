import React from "react";

import { Route, Switch } from "react-router-dom";

import Home from "./Home/Home";

// Solutions
import Tpe from "./Solutions/Tpe";
import Pme from "./Solutions/Pme";
import ExpertComptable from "./Solutions/ExpertComptable";
import Avocat from "./Solutions/Avocat";

// PAY
import Externalization from "./Pay/Externalization";
import InternalManagement from "./Pay/InternalManagement";
import PayAudit from "./Pay/Audit";

// HR
import Lifetime from "./HR/Lifetime";
import Procedure from "./HR/Procedure";
import HrAudit from "./HR/Audit";

// ABOUT
import About from "./About/About";

// CONTACT
import Contact from "./Contact/Contact";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/nos-solutions/tpe" component={Tpe} />
      <Route path="/nos-solutions/pme" component={Pme} />
      <Route
        path="/nos-solutions/expert-comptable"
        component={ExpertComptable}
      />
      <Route path="/nos-solutions/cabinet-juridique" component={Avocat} />
      <Route path="/paie/externalisation" component={Externalization} />
      <Route path="/paie/gestion-interne" component={InternalManagement} />
      <Route path="/paie/audit" component={PayAudit} />
      <Route path="/rh/vie-du-contrat" component={Lifetime} />
      <Route path="/rh/procedures" component={Procedure} />
      <Route path="/rh/audit" component={HrAudit} />
      <Route path="/qui-sommes-nous" component={About} />
      <Route path="/contact" component={Contact} />
    </Switch>
  );
};

export default Router;
