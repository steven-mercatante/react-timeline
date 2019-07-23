import React, { useEffect } from "react";
import ConditionalMarkdown from "../atoms/ConditionalMarkdown";
import CardWrapper from "../cards/CardWrapper";
import TweetAtom from "../atoms/TweetAtom";

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
