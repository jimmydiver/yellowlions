import React, { useState, useEffect, useContext } from "react";
import "./App.css";
import { BrowserRouter, Redirect, Route, Switch, Link } from "react-router-dom";
import AppContext from "./AppContext";
import LayoutRoute from "./LayoutRoute";
import MainScreen from "./MainScreen";
import TripsScreen from "./TripsScreen";
import BlogScreen from "./blog/BlogScreen";
import LoginScreen from "./LoginScreen";
import ProfileScreen from "./ProfileScreen";
import OpenWaterDiveScreen from "./courses/OpenWaterDiveScreen";
import AdvancedOpenWaterDiverCourseScreen from "./courses/AdvancedOpenWaterDiverCourseScreen";
import DiveMasterScreen from "./courses/DiveMasterScreen";
import RescueDiverScreen from "./courses/RescueDiverScreen";
import RegistrationScreen from "./RegistrationScreen";
import Post from "./blog/Post"
import NewPost from "./blog/NewPost"

const PrivateRoute = (props) => {
  const [globalState, setGlobalStateg] = useContext(AppContext);

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
         
          <LayoutRoute path="/blog/posts/:id" exact={true} component={Post} />
          <LayoutRoute path="/blog/newposts" exact={true} component={NewPost} />
          
          <LayoutRoute path="/blog" exact={true} component={BlogScreen} />
         
          <LayoutRoute
            path="/PADIOpenWaterCourse"
            exact={true}
            component={OpenWaterDiveScreen}
          />
          <LayoutRoute
            path="/PADIAdvancedOpenWaterCourse"
            exact={true}
            component={AdvancedOpenWaterDiverCourseScreen}
          />
          <LayoutRoute
            path="/PADIDivemaster"
            exact={true}
            component={DiveMasterScreen}
          />
          <LayoutRoute
            path="/PADIRescueDiverCourse"
            exact={true}
            component={RescueDiverScreen}
          />

          <LayoutRoute
            path="/registration"
            exact={true}
            component={RegistrationScreen}
          />
          <LayoutRoute path="/login" exact={true} component={LoginScreen} />
          <PrivateRoute
            path="/profile"
            exact={true}
            component={ProfileScreen}
          />
        </Switch>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
/*

          <PrivateRoute
          path="/profile"
          exact={true}
          component={ProfileScreen}
        />
 */
