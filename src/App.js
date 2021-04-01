import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import NavbarPort from "./components/NavbarPort";
import Footer from "./components/Footer";
import Images from "./components/Images";
import Wrapper from "./components/Wrapper";
import Profile from "./components/Profile";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <NavbarPort />
        <Wrapper>
          <Switch>
            <Route exact path="/" component={Images} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
