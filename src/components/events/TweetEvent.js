import React from "react";
import Event from "./Event";
import TweetCard from "../cards/TweetCard";

export default function TweetEvent(props) {
  const { date, id, text, marker, children } = props;

  return (
    <Event date={date} marker={marker}>
      <TweetCard date={date} id={id} text={text}>
        {children}
      </TweetCard>
    </Event>
  );
}
