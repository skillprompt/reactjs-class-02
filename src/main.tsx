import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Counter } from "./counter";
import { TimeCounter } from "./time-counter";
import { ModalParent } from "./modal-parent";

// function add(n1, n2) {
//   return n1 + n2;
// }
// add(1, 2); // 3
// add(5,7); // 12

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Counter />
    <TimeCounter countryName="Nepal" timeZone="+5:45" continent="Asia" />
    <TimeCounter countryName="India" timeZone="+5:30" />
    <TimeCounter
      countryName="USA"
      timeZone="+11:00"
      continent="North America"
    />
    <ModalParent />
  </React.StrictMode>
);
