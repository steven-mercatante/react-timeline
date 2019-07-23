import React, { useEffect } from "react";
import styled from "styled-components";
import ConditionalMarkdown from "./ConditionalMarkdown";
import CardWrapper from "./CardWrapper";

// TODO: show loading indicator while Tweet loads?

const Tweet = styled.div`
  .twitter-tweet {
    width: 100% !important;
  }
`;

export default function TwitterCard({ date, id, text }) {
  useEffect(() => {
    window.twttr.widgets.createTweet(
      id,
      document.querySelector(`.tweet[data-id="${id}"]`)
    );
  }, [id]);

  return (
    <CardWrapper date={date}>
      <ConditionalMarkdown>{text}</ConditionalMarkdown>
      <Tweet className="tweet" data-id={id} />
    </CardWrapper>
  );
}
