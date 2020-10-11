import React, { useState, useEffect, useContext } from "react";
import "./App.css";
import { BrowserRouter, Redirect, Route, Switch, Link } from "react-router-dom";
import AppContext from "./AppContext";
import LayoutRoute from "./LayoutRoute";
import MainScreen from "./MainScreen";
import TripsScreen from './TripsScreen';
import BlogScreen from './BlogScreen';
import LoginScreen from './LoginScreen'
import NavBar from "./NavBar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import OurCarousel from "./OurCarousel";
import IconButton from "./IconButton";
import Engagement from "./Engagement";
import SocialMediaLinks from "./SocialMediaLinks";

const PrivateRoute = (props) => {
  const [globalState, setGlobalState] = useContext(AppContext);

  // If user logged in, let them through
  if (globalState.loggedIn) {
    return (
      <LayoutRoute
        path={props.path}
        exact={props.exact}
        component={props.component}
      />
    );

    // Otherwise, send them to /login
  } else {
    return <Redirect to="/login" />;
  }
};

const App = () => {
  const [globalState, setGlobalState] = useState({
    user: {
      token: localStorage.getItem("token") && localStorage.getItem("token"),
    },
    loggedIn: localStorage.getItem("token") ? true : false,
    color: "red",
  });

  useEffect(() => {
    if (globalState.loggedIn === true) {
      localStorage.setItem("token", globalState.user.token);
    } else {
      localStorage.clear();
    }
  }, [globalState.loggedIn]);

  return (
    <AppContext.Provider value={[globalState, setGlobalState]}>
      <BrowserRouter>
        <Switch>
          <LayoutRoute path="/" exact={true} component={MainScreen} />
          <LayoutRoute path="/trips" exact={true} component={TripsScreen} />
          <LayoutRoute path="/blog" exact={true} component={BlogScreen} />
          
          <LayoutRoute path="/login" exact={true} component={LoginScreen} />
        
         
        </Switch>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
/*
<LayoutRoute
            path="/registration"
            exact={true}
            component={RegistrationScreen}
          />
          <PrivateRoute
          path="/profile"
          exact={true}
          component={ProfileScreen}
        />
 */