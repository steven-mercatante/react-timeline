import React from "react";
import styled from "styled-components";
import { TwitterTweetEmbed } from "react-twitter-embed";
import ConditionalMarkdown from "./ConditionalMarkdown";
import Buttons from "./Buttons";
import CardWrapper from "./CardWrapper";

const OverflowWrapper = styled.div`
  overflow: hidden;
`;

// TODO: show loading indicator while Tweet loads?
const Container = styled.div`
  // min-width: ${props => props.theme.twitter.minWidth};
  // width: ${props => props.theme.twitter.width};
  // min-height: ${props => props.theme.twitter.minHeight};
  background-color: ${props => props.theme.twitter.backgroundColor};
`;

export default function TwitterNode({ event, ...rest }) {
  const { id, text, buttons } = event;

  return (
    <CardWrapper event={event} {...rest}>
      <ConditionalMarkdown text={text} />
      <Container className="tweet-container">
        <TwitterTweetEmbed tweetId={id} />
      </Container>
      {buttons && <Buttons buttons={buttons} />}
    </CardWrapper>
  );
}
