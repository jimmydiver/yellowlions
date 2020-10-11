import React from "react";
import "./App.css";
import NavBar from "./NavBar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import OurCarousel from './OurCarousel';
import IconButton from "./IconButton";
import Engagement from "./Engagement";
import SocialMediaLinks from "./SocialMediaLinks";

const App = () => {
  return (
    <div className="App">
      <NavBar
        brand="Yellow Lions Dive Centre"
        links={["Trips", "Blog"]}
        links2={["Log In"]}
      >
        <div className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </div>
      </NavBar>
<OurCarousel/>
      

      <Jumbotron
        href="services"
        title="Our Services"
        text="Leave your stresses behind and get wet today! "
      />

      <div
        className="container-cards"
        
      >
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

      <div class="container" style={{ maxWidth: "40em"}}>
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
  );
};

export default App;
