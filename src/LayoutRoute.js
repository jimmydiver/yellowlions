import React, { useContext } from "react";
import AppContext from "./AppContext";
import { Route, Link } from "react-router-dom";
import NavBar from "./NavBar";
import Engagement from "./Engagement";
import IconButton from "./IconButton";
import SocialMediaLinks from "./SocialMediaLinks";

const LayoutRoute = (props) => {
  const [globalState, setGlobalState] = useContext(AppContext);

  const footerStyle = {
    // position: 'absolute',
    // bottom: '0px',
    // left: '0px',
    // width: '100%'
  };

  const logoutUser = () => {
    setGlobalState({
      ...globalState,
      loggedIn: false,
    });
  };

  return (
    <React.Fragment>
      <NavBar brand="Yellow Lions Dive Centre" links={["Trips", "Blog"]}>
        {!globalState.loggedIn && (
          <Link to="/login" className="btn btn-secondary">
            Login
          </Link>
        )}

        {globalState.loggedIn && (
          <>
            <Link to="/profile" className="btn btn-secondary">
              Profile
            </Link>
            <button onClick={logoutUser} className="btn btn-secondary">
              Log out
            </button>
          </>
        )}
      </NavBar>
      <Route
        path={props.path}
        exact={props.exact}
        component={props.component}
      />
      <br />
      <br />

      <div style={footerStyle}>
        <Engagement>
          <SocialMediaLinks>
            <IconButton icon="fa-facebook" />
            <IconButton icon="fa-linkedin" />
            <IconButton icon="fa-instagram" />
            <IconButton icon="fa-youtube" />
          </SocialMediaLinks>
          <p style={{ color: "white", margin: "10px" }}>
            Copyright Yellow Lions Dive Centre 2020
          </p>
        </Engagement>
      </div>
    </React.Fragment>
  );
};

export default LayoutRoute;
