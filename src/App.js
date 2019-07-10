import React from "react";
import Timeline from "./components/Timeline";

function App() {
  const events = [
    { body: "foo" },
    { body: "bar" },
    { body: "quux" },
    { body: "pizza" }
  ];
  return (
    <div>
      <Timeline events={events} />
    </div>
  );
}

export default App;
