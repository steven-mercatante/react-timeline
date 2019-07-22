import React from "react";
import Event from "./Event";
import CardWrapper from "./CardWrapper";
import YouTubeCard from "./YouTubeCard";

export default function YouTubeEvent(props) {
  const { date, id, name, text } = props;

  return (
    <Event date={date}>
      <CardWrapper date={date}>
        <YouTubeCard id={id} name={name} text={text} />
      </CardWrapper>
    </Event>
  );
}
