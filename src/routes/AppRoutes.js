import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { Navbar } from '../components/ui/Navbar'
import { About } from "../components/pages/About";
import { Contact } from "../components/pages/Contact";
import { Home } from "../components/pages/Home";
import { Services } from "../components/pages/Services";


export const AppRoutes = () => {
    return (

        <Router>
            <div>
                <Navbar />
                <Switch>
                    
                    <Route path="/services" component={Services}/>
                    <Route path="/about" component={About}/>
                    <Route path="/contact" component={Contact}/>
                    <Route path="/" component={Home}/>

                    <Redirect to="/"/>
                   
                </Switch>
            </div>
        </Router>

    )
}
