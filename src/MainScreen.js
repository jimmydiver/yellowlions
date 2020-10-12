import React, { useState, useContext } from "react";
import AppContext from "./AppContext";
import { Link } from "react-router-dom";
import "./App.css";
import OurCarousel from "./OurCarousel";
import Jumbotron from "./Jumbotron";
import Card from "./Card";

const MainScreen = () => {
  const [globalState, setGlobalState] = useContext(AppContext);

  const [state, setState] = useState();

  return (
    <div className="screen">
      <OurCarousel />
      <Jumbotron
        href="services"
        title="Our Services"
        text="Leave your stresses behind and get wet today! "
      />
      <div className="container-cards">
        <Card
          title="PADI Open Water Course"
          text="Take your first breathes underwater and dive with a buddy upto 18m!"
          btnLabel="Dive in now!"
          cardImage="https://images.unsplash.com/photo-1544642058-2d2bfc88a86a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        />
        <Card
          title="PADI Advanced Open Water Course"
          text="Take your adventures to the next level and get certified to 30m!"
          btnLabel="Level Up!"
          cardImage="https://images.unsplash.com/photo-1574681289998-05cd669af0b9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        />
        <Card
          title="PADI Rescue Diver Course"
          text="Earn the respect from all other divers on the boat. Prevent emergencies, save lives! "
          btnLabel="Join Today"
          cardImage="https://lh3.googleusercontent.com/proxy/TCUbjDPtFaflofRejHIVlOTsXUaw1gz6KJ5dmSTDynAtY9dAI0x1h603ztkBUTitaSpWvokpoPNGa6J5PwEMzgt0fOF9IJaKwHQ"
        />
        <Card
          title="PADI Divemaster"
          text="Turn PRO today! The ultimate course for all enthusiasts! A definite must!"
          btnLabel="Go PRO!"
          cardImage="https://www.hertsdiveclub.co.uk/wp-content/uploads/2017/12/padi-divemaster.jpg"
        />
      </div>
      <Jumbotron
        title="Keep up to date and join us"
        para="Leave your email address below to find out more"
      ></Jumbotron>
      <div class="container" style={{ maxWidth: "40em" }}>
        <label>Enter your firstname *</label>
        <input class="field form-control" name="firstName" type="text" />

        <label>Enter your lastname *</label>
        <input class="field form-control" name="lastName" type="text" />

        <label>Enter your email *</label>
        <input class="field form-control" name="email" type="text" />

        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
          Join Us
        </button>
      </div>
    </div>
  );
};

export default MainScreen;
