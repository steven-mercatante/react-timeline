import React from "react";
import ConditionalMarkdown from "../atoms/ConditionalMarkdown";
import Card from "./Card";
import TweetAtom from "../atoms/TweetAtom";

export default function TweetCard({ date, id, text, children }) {
  return (
    <Card date={date}>
      <ConditionalMarkdown>{text}</ConditionalMarkdown>
      <TweetAtom id={id} />
      {children}
    </Card>
  );
}
