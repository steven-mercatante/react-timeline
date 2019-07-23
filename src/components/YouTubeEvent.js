import React from "react";
import Event from "./Event";
import YouTubeCard from "./YouTubeCard";

export default function YouTubeEvent(props) {
  const { date, id, name, text } = props;

  return (
    <Event date={date}>
      <YouTubeCard date={date} id={id} name={name} text={text} />
    </Event>
  );
}
