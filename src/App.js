import React from "react";
import "./regulondbGlobalStyle.css";
import Description from "./components/Description";
import FormRegulondbData from "./components/FormRegulondbData";
import FormUserData from "./components/FormUserData";
import DttGraphic from "./components/DttGraphic";
import { Cover, Tabs } from "./components/ui-components/index";
import Form1 from "./components/Form1";
const tabsInfo = [
  { id: "01", name: "RegulonDB-Data", disabled: false },
  { id: "02", name: "User Data", disabled: false }
];
const tabs = [
  <div id="01">
    <Description />
    <FormRegulondbData />
  </div>,
  <div id="02">
    <Description />
    <FormUserData />{" "}
  </div>
];

export default function App() {
  return (
    <div>
      <Cover>
        <h1>DrawingTracesTool</h1>
      </Cover>
      <Tabs tabsInfo={tabsInfo} tabs={tabs} />
      <DttGraphic />
    </div>
  );
}
