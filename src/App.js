import React from "react";
import Timeline from "./components/Timeline";
import "./App.css";

// TODO: let users specify custom class names (& maybe CSS) per Event
function App() {
  const events = [
    { body: "quux", date: "3/1/2019", tweet: "1006202911632904197" },
    {
      date: "1/1/2019",
      body: "foo",
      image: {
        src:
          "https://images.unsplash.com/photo-1562696482-77619dec0ae7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80",
        alt: "trees"
      }
    },
    { body: "**hello** _world_", date: "2/1/2019" },
    { body: "pizza", date: "4/1/2019", tweet: "1144426377787183105" }
  ];
  return (
    <div>
      <Timeline events={events} />
    </div>
  );
}

export default App;
