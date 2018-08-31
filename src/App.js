import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import BookAppointment from './component/BookAppointment';
import BackPain from './component/conditions/BackPain';
import NeckPain from './component/conditions/NeckPain';
import Cronic from './component/conditions/Cronic';
import Planter from './component/conditions/Planter';
import ShoulderPain from './component/conditions/ShoulderPain';
import Home from './component/Home';
import Header from './component/Header';
import Footer from './component/Footer';
import FAQ from './component/FAQ';
import Contact from './component/Contact';
import Services from './component/services/Services';
import Conditions from './component/conditions/Conditions';

import  HandsOfPhysio from './component/services/HandsOfPhysio';
import DryNeedling from './component/services/DryNeedling';
import Cupping from './component/services/Cupping';
import Taping from './component/services/Taping';
//import firebase from 'firebase';

class App extends Component {
    constructor (props) {
        super(props)

    }

  render() {
      return (
            <Router>
                <div>
                    <Header></Header>
                    <Route exact path="/" component={Home} />
                    <Route path="/book" component={BookAppointment} />
                    <Route path="/back-pain" component={BackPain} />
                    <Route path="/neck-pain" component={NeckPain} />
                    <Route path="/cronic" component={Cronic} />
                    <Route path="/shoulder-pain" component={ShoulderPain} />
                    <Route path="/planter" component={Planter} />
                    <Route path="/faq" component={FAQ} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/services" component={Services} />
                    <Route path="/conditions" component={Conditions} />
                    <Route path="/handsof" component={HandsOfPhysio} />
                    <Route path="/dryneedling" component={DryNeedling} />
                    <Route path="/cupping" component={Cupping} />
                    <Route path="/taping" component={Taping} />
                    <Footer></Footer>
                </div>
            </Router>
      );
  }
}

export default App;
