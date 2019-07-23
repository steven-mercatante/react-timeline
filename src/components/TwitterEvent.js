import React from "react";
import Event from "./Event";
import TwitterCard from "./TwitterCard";

export default function TwitterEvent(props) {
  const { date, id, text, marker } = props;

  return (
    <Event date={date} marker={marker}>
      <TwitterCard date={date} id={id} text={text} />
    </Event>
  );
}
