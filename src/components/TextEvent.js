import React from "react";
import Event from "./Event";
import TextCard from "./TextCard";

export default function TextEvent(props) {
  const { date, text, children } = props;

  return (
    <Event date={date}>
      <TextCard text={text} />
    </Event>
  );
}
