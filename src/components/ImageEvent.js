import React from "react";
import Event from "./Event";
import CardWrapper from "./CardWrapper";
import ConditionalMarkdown from "./ConditionalMarkdown";

export default function ImageEvent(props) {
  const { date, src, alt, credit, text } = props;

  return (
    <Event date={date}>
      <CardWrapper date={date}>
        <ConditionalMarkdown>{text}</ConditionalMarkdown>
        <img src={src} alt={alt} />
        {credit && (
          <ConditionalMarkdown className="credit">{credit}</ConditionalMarkdown>
        )}
      </CardWrapper>
    </Event>
  );
}
