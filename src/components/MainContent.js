import React from "react";
import LiveMap from "./livemap";
import Country from "./report";
import { Switch, Route, Redirect } from "react-router-dom";

const Content = () => {
  return (
    <div className="content container-fluid p-0">
      <Switch>
        <Route path="/livemap" children={<LiveMap />} />
        <Route path="/reports/:country" children={<Country />} />
        <Route path="*">
          <Redirect to="/livemap"></Redirect>
        </Route>
      </Switch>
    </div>
  );
};

export default Content;
