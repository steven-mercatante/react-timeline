import React from "react";
import ConditionalMarkdown from "../atoms/ConditionalMarkdown";
import CardWrapper from "../cards/CardWrapper";
import YouTubeAtom from "../atoms/YouTubeAtom";

export default function YouTubeCard({ date, id, name, text }) {
  return (
    <CardWrapper date={date}>
      <ConditionalMarkdown>{text}</ConditionalMarkdown>
      <YouTubeAtom id={id} name={name} />
    </CardWrapper>
  );
}
