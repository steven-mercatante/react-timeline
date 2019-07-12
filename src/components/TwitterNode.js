import React from "react";
import styled from "styled-components";
import { TwitterTweetEmbed } from "react-twitter-embed";

const Container = styled.div`
  width: 100%;
`;

export default function TwitterNode({ event }) {
  return (
    <Container className="tweet-container">
      <TwitterTweetEmbed tweetId={event.id} />
    </Container>
  );
}
