import React from "react";
import Event from "./Event";
import TextCard from "./TextCard";

export default function TextEvent(props) {
  const { date, text, marker, children } = props;

  return (
    <Event date={date} marker={marker}>
      <TextCard date={date} text={text}>
        {children}
      </TextCard>
    </Event>
  );
}
