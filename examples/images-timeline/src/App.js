import React from "react";
import Timeline from "@merc/react-timeline";

const events = [{ type: "text", date: "7/15/19", text: "hi!" }];

function App() {
  return (
    <div>
      <Timeline events={events} />
    </div>
  );
}

export default App;
