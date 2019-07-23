import React from "react";
import Event from "./Event";
import ImageCard from "./ImageCard";

export default function ImageEvent(props) {
  const { date, src, alt, credit, text } = props;

  return (
    <Event date={date}>
      <ImageCard date={date} src={src} alt={alt} credit={credit} text={text} />
    </Event>
  );
}
