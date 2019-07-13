import React from "react";
import Timeline from "./components/Timeline";
import "./App.css";
import styled from "styled-components";

// TODO: let users specify custom class names (& maybe CSS) per Event
// TODO: allow for passing datetime which would be passed as datetime attr to the time element
const events = [
  { type: "youTube", date: "7/10/19", id: "8ktONdU_wXU" },
  {
    type: "twitter",
    date: "July of the year 2019",
    id: "1006202911632904197"
  },
  {
    type: "text",
    date: "7/10/19",
    text: "Began prototyping React Timeline",
    opts: { cssClass: "custom-event-class" }
  },
  {
    type: "text",
    date: "7/10/19",
    text: "hello world",
    opts: { cssClass: "custom-event-class" }
  },
  {
    type: "image",
    date: "1/1/2019",
    src:
      "https://images.unsplash.com/photo-1562734041-a2d56f060a44?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80",
    alt: "fireworks",
    credit: `Photo by https://unsplash.com/@aahubs`
  },
  {
    type: "image",
    date: "Sometime in 2018",
    text: "You can include images",
    src:
      "https://images.unsplash.com/photo-1562741789-fd05816d507e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
    alt: "bhudda statue",
    credit: "Photo by https://unsplash.com/@supermojor"
  },

  {
    type: "image",
    date: "Sometime in 2018",
    src:
      "https://images.unsplash.com/photo-1421494756418-72f0f89c6bfd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
    alt: "cherries",
    credit: "Photo by https://unsplash.com/@nehadeshmukh"
  },
  {
    type: "text",
    date: "7/10/19",
    text:
      '> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'
  },
  { type: "text", date: "7/10/19", text: "**Markdown** is *supported*" }
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
  return (
    <div>
      <Timeline events={events} />
    </div>
  );
}

export default App;
