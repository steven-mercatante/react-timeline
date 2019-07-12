import React, { useEffect, useState } from "react";
import Timeline from "./components/Timeline";
import "./App.css";
import styled from "styled-components";

// TODO: events should be able to be passed via local data or from HTTP req
// TODO: let users specify custom class names (& maybe CSS) per Event
// TODO: allow for passing datetime which would be passed as datetime attr to the time element
const events = [
  {
    // component: MyDopeEvent,
    date: "1/1/2019",
    image: {
      src:
        "https://images.unsplash.com/photo-1562734041-a2d56f060a44?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80",
      alt: "fireworks",
      credit: "Photo by https://unsplash.com/@aahubs"
    }
  },
  {
    date: "7/10/19",
    body: "Began prototyping React Timeline",
    opts: { cssClass: "custom-event-class" }
  },
  // { date: "July of the year 2019", tweetId: "1006202911632904197" },
  {
    date: "Sometime in 2018",
    body: "You can include images",
    image: {
      src:
        "https://images.unsplash.com/photo-1562741789-fd05816d507e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
      alt: "bhudda statue",
      credit: "Photo by https://unsplash.com/@supermojor"
    }
  },
  {
    date: "Sometime in 2018",
    image: {
      src:
        "https://images.unsplash.com/photo-1421494756418-72f0f89c6bfd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
      alt: "cherries",
      credit: "Photo by https://unsplash.com/@nehadeshmukh"
    }
  },
  {
    date: "7/10/19",
    body:
      '> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'
  },
  { date: "7/10/19", youTubeId: "8ktONdU_wXU" },
  { date: "7/10/19", body: "**Markdown** is *supported*" }
];

function MyDopeEvent({ event }) {
  const Container = styled.div`
    background-color: rebeccapurple;
    width: 40%;
    border-radius: 10px;
  `;

  return (
    <Container>
      <h1>custom event!</h1>
      <p>{event.date}</p>
    </Container>
  );
}

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
      <Timeline
        events={events}
        alternateEvents={true}
        inlineDate={isMobile || false}
      />
    </div>
  );
}

export default App;
