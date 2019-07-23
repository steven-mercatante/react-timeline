import React from "react";
import Event from "./Event";
import ImageCard from "./ImageCard";

export default function ImageEvent(props) {
  const { date, src, alt, credit, text, marker } = props;

  return (
    <Event date={date} marker={marker}>
      <ImageCard date={date} src={src} alt={alt} credit={credit} text={text} />
    </Event>
  );
}
