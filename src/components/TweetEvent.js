import React from "react";
import Event from "./Event";
import TweetCard from "./TweetCard";

export default function TweetEvent(props) {
  const { date, id, text, marker } = props;

  return (
    <Event date={date} marker={marker}>
      <TweetCard date={date} id={id} text={text} />
    </Event>
  );
}
