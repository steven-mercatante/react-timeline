import React, { useEffect } from "react";
import ConditionalMarkdown from "./ConditionalMarkdown";
import CardWrapper from "./CardWrapper";
import TweetAtom from "./TweetAtom";

export default function TweetCard({ date, id, text }) {
  useEffect(() => {
    window.twttr.widgets.createTweet(
      id,
      document.querySelector(`.tweet[data-id="${id}"]`)
    );
  }, [id]);

  return (
    <CardWrapper date={date}>
      <ConditionalMarkdown>{text}</ConditionalMarkdown>
      <TweetAtom id={id} />
    </CardWrapper>
  );
}
