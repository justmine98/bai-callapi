import React, { Component } from "react";
import "./App.css";
import Menu from "./components/Menu/Menu";
import routes from "./routes";
import { Routes, Route, BrowserRouter } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Menu />
          <div className="container">
            <div className="row">{this.showContentMenus(routes)}</div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
  showContentMenus = (routes) => {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            Component={route.main}
          />
        );
      });
    }
    return <Routes>{result}</Routes>;
  };
}
export default App;
