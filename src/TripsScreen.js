import React from "react";
import Jumbotron from "./Jumbotron";
import Card from "./Card";

const TripsScreen = () => {
  return (
    <div className="screen">
      <center>
        <Jumbotron trip="Yellow Lions Trips"></Jumbotron>
      </center>

      <div
        className="container-cards"
        
      >
        <Card
          title="beginners Trip"
          text="Beautiful warm water, colourful marine life, shallow bays and the very best diving tuition. This collection is perfect for those seeking an amazing introduction to the underwater world on vacation."
          btnLabel="Book Now"
          cardImage="https://media4.giphy.com/media/xUOxeQWMpDf5NpZztC/200.gif"
        />
        <Card
          title="Dive with Sharks"
          text="Our fiercest collection yet! These resorts and liveaboards offer the absolute best in shark encounters, for a dive trip you'll never forget."
          btnLabel="Book Now"
          cardImage="https://i.pinimg.com/originals/62/d2/13/62d213aa16288cee25d2d021f05a61c5.gif"
        />
        <Card
          title="Book with Confidence"
          text="Book before December 31st and pay as low as 5% to confirm your booking. If you need to cancel, you'll receive a full cash refund up to 8 days before your trip starts."
          btnLabel="Book Now"
          cardImage="https://media1.tenor.com/images/049c935070ddfe1f4021be17a90d4934/tenor.gif?itemid=11745132"
        />
      </div>
    </div>
  );
};

export default TripsScreen;
