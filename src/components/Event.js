import React from "react";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import { TwitterTweetEmbed } from "react-twitter-embed";
import YouTubeEmbed from "./YoutubeEmbed";

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 50%;
  align-self: flex-start;
  margin-bottom: 10px;

  :nth-child(1) {
    margin-top: 10px;
  }

  :nth-child(even) {
    align-self: flex-end;
    justify-content: flex-start;

    .content {
      align-items: flex-start;
    }
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  border-radius: 4px;
  background-color: cyan;
  min-width: 200px;
  max-width: 700px;
  padding: 4px;
  margin: 0 6px;
`;

const ImageContainer = styled.div`
  display: flex;
  max-height: 400px;
  width: 100%;

  img {
    flex: 1;
    object-fit: cover;
    overflow: hidden;
  }
`;

const TweetContainer = styled.div`
  width: 100%;
`;

export default function Event({ event }) {
  const { date, body, image, tweet, youtube } = event;
  const hasImage = Boolean(image);
  const hasTweet = Boolean(tweet);

  const containerClasses = ["event"];
  if (hasImage) {
    containerClasses.push("has-image");
  }

  if (hasTweet) {
    containerClasses.push("has-tweet");
  }

  return (
    <Container className={containerClasses.join(" ")}>
      <Content className="content">
        <time>{date}</time>
        <ReactMarkdown source={body} />
        {image && (
          <ImageContainer>
            <img src={image.src} alt={image.alt} />
          </ImageContainer>
        )}

        {tweet && (
          <TweetContainer className="tweet-container">
            <TwitterTweetEmbed tweetId={tweet} />
          </TweetContainer>
        )}

        {youtube && <YouTubeEmbed id={youtube} />}
      </Content>
    </Container>
  );
}
