import React from "react";
import ConditionalMarkdown from "../atoms/ConditionalMarkdown";
import Card from "./Card";
import YouTubeAtom from "../atoms/YouTubeAtom";

export default function YouTubeCard({ date, id, name, text }) {
  return (
    <Card date={date}>
      <ConditionalMarkdown>{text}</ConditionalMarkdown>
      <YouTubeAtom id={id} name={name} />
    </Card>
  );
}
