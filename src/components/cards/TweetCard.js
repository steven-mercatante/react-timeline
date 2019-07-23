import React, { useEffect } from "react";
import ConditionalMarkdown from "../atoms/ConditionalMarkdown";
import Card from "./Card";
import TweetAtom from "../atoms/TweetAtom";

export default function TweetCard({ date, id, text }) {
  useEffect(() => {
    window.twttr.widgets.createTweet(
      id,
      document.querySelector(`.tweet[data-id="${id}"]`)
    );
  }, [id]);

  return (
    <Card date={date}>
      <ConditionalMarkdown>{text}</ConditionalMarkdown>
      <TweetAtom id={id} />
    </Card>
  );
}
