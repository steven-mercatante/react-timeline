import React from "react";
import styled from "styled-components";
import { TwitterTweetEmbed } from "react-twitter-embed";
import ConditionalMarkdown from "./ConditionalMarkdown";

// TODO: show loading indicator while Tweet loads?
const Container = styled.div`
  min-width: 300px;
  width: 100%;
  min-height: 120px;
  background-color: white;
`;

export default function TwitterNode({ event }) {
  const { id, text } = event;
  return (
    <div>
      <ConditionalMarkdown text={text} />
      <Container className="tweet-container">
        <TwitterTweetEmbed tweetId={id} />
      </Container>
    </div>
  );
}
