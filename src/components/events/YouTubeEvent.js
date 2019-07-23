import React from "react";
import Event from "./Event";
import YouTubeCard from "../cards/YouTubeCard";

export default function YouTubeEvent(props) {
  const { date, id, name, text, marker, children } = props;

  return (
    <Event date={date} marker={marker}>
      <YouTubeCard date={date} id={id} name={name} text={text}>
        {children}
      </YouTubeCard>
    </Event>
  );
}
