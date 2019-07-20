import React, { useEffect } from "react";
import styled from "styled-components";
import ConditionalMarkdown from "./ConditionalMarkdown";
import Buttons from "./Buttons";
import CardWrapper from "./CardWrapper";

// TODO: show loading indicator while Tweet loads?

const Tweet = styled.div`
  .twitter-tweet {
    width: 100% !important;
  }
`;

export default function TwitterCard({ event, ...rest }) {
  const { id, text, buttons } = event;

  useEffect(() => {
    window.twttr.widgets.createTweet(
      id,
      document.querySelector(`.tweet[data-id="${id}"]`)
    );
  }, [id]);

  return (
    <CardWrapper event={event} {...rest}>
      <ConditionalMarkdown text={text} />
      <Tweet className="tweet" data-id={id} />

      {buttons && <Buttons buttons={buttons} />}
    </CardWrapper>
  );
}
