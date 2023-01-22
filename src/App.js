import React from "react";
import './index.css';
import './App.css';
import Dabeng from "./Dabeng";
import Scttcper from "./Scttcper";
import Rorg from "./Rorg";

function App() {
  

  // const initechOrg = {
  //   name: "Bill Lumbergh",
  //   actor: "Gary Cole",
  //   children: [
  //     {
  //       name: "Peter Gibbons",
  //       actor: "Ron Livingston",
  //       children: [
  //         {
  //           name: "And More!!",
  //           actor: "This is just to show how to build a complex tree with multiple levels of children. Enjoy!"
  //         }
  //       ]
  //     },
  //     {
  //       name: "Milton Waddams",
  //       actor: "Stephen Root"
  //     },
  //     {
  //       name: "Bob Slydell",
  //       actor: "John C. McGi..."
  //     },
  //   ]
  // };

  return (
    <div>
      {/* <ChartContainer datasource={ds} /> */}
      {/* <HierarchyTree /> */}
      <Dabeng pan={true} containerClass="bg-danger" chartClass="bg-danger"/>
      {/* <Scttcper /> */}
      {/* <Rorg /> */}
    </div>
  );
}

export default App;
