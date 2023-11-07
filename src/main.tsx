import React from "react";
import ReactDOM from "react-dom/client";
import "./tailwind.css";
import "./reset.css";
import App from "./App";
import { RUBBER_DUCKY, SCROOGE } from "./data";
import {CreateNewPersonCard} from "./components/create-new-person-card/create-new-person-card"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <CreateNewPersonCard name="Jan"/>
  </React.StrictMode>
);
