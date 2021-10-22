import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = lazy(() => import("./components/header/header"));
const Home = lazy(() => import("./containers/home/home"));
const Yoga = lazy(() => import("./pages/yoga"));
const About = lazy(() => import("./containers/about2/about2"));
const Footer = lazy(() => import("./components/footer/footer"));

function App() {
  return (
    <Suspense fallback={"Loading.."}>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/yoga">
            <Yoga />
          </Route>
          <Route exact path="/about2">
            <About />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </Suspense>
  );
}

export default App;
