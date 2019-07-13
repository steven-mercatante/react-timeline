import React from "react";
import styled from "styled-components";
import { TwitterTweetEmbed } from "react-twitter-embed";

// TODO: show loading indicator while Tweet loads?
const Container = styled.div`
  min-width: 300px;
  width: 100%;
  min-height: 120px;
  background-color: white;
`;

export default function TwitterNode({ event }) {
  return (
    <Container className="tweet-container">
      <TwitterTweetEmbed tweetId={event.id} />
    </Container>
  );
}
