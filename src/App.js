import React, { useEffect, useState } from "react";
import Timeline from "./components/Timeline";
import "./App.css";

// TODO: events should be able to be passed via local data or from HTTP req
// TODO: let users specify custom class names (& maybe CSS) per Event
const events = [
  {
    date: "7/10/19",
    body: "Began prototyping React Timeline",
    opts: { cssClass: "custom-event-class" }
  },
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
  {
    date: "7/10/19",
    body:
      '> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'
  },
  { date: "7/10/19", youtube: "8ktONdU_wXU" },
  { date: "7/10/19", body: "**Markdown** is *supported*" }
];

function App() {
  // TODO: use a more semantic var name
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  function handleResize() {
    const mediaQueryList = window.matchMedia(`(max-width: 768px)`);
    if (mediaQueryList.matches === true) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }

  return (
    <div>
      {/* TODO: pass config or opts object instead of a bunch of props? */}
      <Timeline events={events} alternateEvents={true} inlineDate={isMobile} />
    </div>
  );
}

export default App;
