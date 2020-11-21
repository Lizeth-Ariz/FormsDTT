import React from "react";
import "./regulondbGlobalStyle.css";
import "./regulonDBColors.css";
import Description from "./components/Description";
import FormRegulondbData from "./components/FormRegulondbData";
import FormUserData from "./components/FormUserData";
import DttGraphic from "./components/DttGraphic";

export default function App() {
  return (
    <div className="root">
      <h1>DrawingTracesTool</h1>
      <Description />
      <FormRegulondbData />
      <DttGraphic />
    </div>
  );
}
