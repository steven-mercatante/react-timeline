import React from "react";
import Timeline from "./components/Timeline";
import "./App.css";

// TODO: events should be able to be passed via local data or from HTTP req
// TODO: let users specify custom class names (& maybe CSS) per Event
function App() {
  const events = [
    { date: "7/10/19", body: "Began prototyping React Timeline" },
    { date: "7/10/19", tweet: "1006202911632904197" },
    { date: "7/10/19", youtube: "8ktONdU_wXU" },
    {
      date: "1/1/2019",
      body: "You can include images",
      image: {
        src:
          "https://images.unsplash.com/photo-1562696482-77619dec0ae7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80",
        alt: "trees"
      }
    },
    { date: "7/10/19", body: "**Markdown** is *supported*", date: "2/1/2019" }
  ];
  return (
    <div>
      <Timeline events={events} />
    </div>
  );
}

export default App;
