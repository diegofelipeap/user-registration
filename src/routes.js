import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Users from "./pages/Users";

// As rotas também são componentes.

function Routes() {


    return (
        <Switch>
            <Router>
                <Route exact path="/" component={Home} />
                <Route exact path="usuarios" component={Users} />
            </Router>
        </Switch>

    )


}


export default Routes