import React from "react";

import { Route, Switch, Redirect } from "react-router-dom";

import Home from "./Home/Home";

// SOLUTIONS
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

//COUNSEL
import CounselPayAudit from "./Counsel/CounselPayAudit";
import CounselRhAudit from "./Counsel/CounselRhAudit";
import TrainingCourse from "./Counsel/TrainingCourse";
import URSSAF from "./Counsel/URSSAF";

// ABOUT
import About from "./About/About";

// CONTACT
import Contact from "./Contact/Contact";

// FAQ
import FAQ from "./FAQ/FAQ";

// ALERTS
import PleaseSignIn from "./_reusable/alerts/PleaseSignIn";
import CustomerReservedArea from "./_reusable/alerts/CustomerReservedArea";

// NAVIGATION
import NavigationPage from "./Navigation/NavigationPage";

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
      <Route
        exact
        path="/nos-solutions"
        render={() => <NavigationPage index={1} />}
      />

      <Route path="/paie/externalisation" component={Externalization} />
      <Route path="/paie/gestion-interne" component={InternalManagement} />
      <Route path="/paie/audit" component={PayAudit} />
      <Route exact path="/paie" render={() => <NavigationPage index={2} />} />

      <Route path="/rh/vie-du-contrat" component={Lifetime} />
      <Route path="/rh/procedures" component={Procedure} />
      <Route path="/rh/audit" component={HrAudit} />
      <Route exact path="/rh" render={() => <NavigationPage index={3} />} />

      <Route
        path="/conseil-et-accompagnement/audit-paie"
        component={CounselPayAudit}
      />
      <Route
        path="/conseil-et-accompagnement/audit-rh"
        component={CounselRhAudit}
      />
      <Route
        path="/conseil-et-accompagnement/formation"
        component={TrainingCourse}
      />
      <Route path="/conseil-et-accompagnement/URSSAF" component={URSSAF} />
      <Route
        exact
        path="/conseil-et-accompagnement"
        render={() => <NavigationPage index={4} />}
      />

      <Route exact path="/l'équipe-4A" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/faq" component={FAQ} />

      <Route exact path="/espace-non-authorisé" component={PleaseSignIn} />
      <Route
        exact
        path="/espace-reservé-aux-clients"
        component={CustomerReservedArea}
      />
      <Redirect to="/" />
    </Switch>
  );
};

export default Router;
