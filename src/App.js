import React from "react";
import Timeline from "./components/Timeline";
import "./App.css";

// TODO: events should be able to be passed via local data or from HTTP req
// TODO: let users specify custom class names (& maybe CSS) per Event
function App() {
  const events = [
    { date: "7/10/19", body: "Began prototyping React Timeline" },
    {
      date: "1/1/2019",
      image: {
        src:
          "https://images.unsplash.com/photo-1562734041-a2d56f060a44?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80",
        alt: "fireworks"
      }
    },
    { date: "July - September 2019", body: "Began prototyping React Timeline" },
    { date: "July of the year 2019", tweet: "1006202911632904197" },
    {
      date: "Sometime in 2018",
      body: "You can include images",
      image: {
        src:
          "https://images.unsplash.com/photo-1562696482-77619dec0ae7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80",
        alt: "trees"
      }
    },
    { date: "7/10/19", youtube: "8ktONdU_wXU" },
    { date: "7/10/19", body: "**Markdown** is *supported*" }
  ];
  return (
    <div>
      {/* TODO: pass config or opts object instead of a bunch of props? */}
      <Timeline events={events} alternateEvents={false} inlineDate={true} />
    </div>
  );
}

export default App;
