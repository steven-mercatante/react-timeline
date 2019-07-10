import React from "react";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import { TwitterTweetEmbed } from "react-twitter-embed";

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 50%;
  align-self: flex-start;
  margin-bottom: 10px;

  .content {
    align-items: flex-end;
  }

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
  border-radius: 4px;
  background-color: cyan;
  min-width: 200px;
  max-width: 700px;
  padding: 4px;
  margin: 0 6px;
  align-self: flex-end;
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

export default function Event({ event }) {
  const { date, body, image, tweet } = event;

  return (
    <Container className="event">
      <Content className="content">
        <time>{date}</time>
        <ReactMarkdown source={body} />
        {image && (
          <ImageContainer>
            <img src={image.src} alt={image.alt} />
          </ImageContainer>
        )}

        {tweet && <TwitterTweetEmbed tweetId={tweet} />}
      </Content>
    </Container>
  );
}
