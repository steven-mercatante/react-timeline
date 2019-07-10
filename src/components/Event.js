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
  // border: 1px solid red;
  text-align: right;

  :nth-child(1) {
    margin-top: 10px;
  }

  :nth-child(even) {
    align-self: flex-end;
    justify-content: flex-start;
    text-align: left;
  }
`;

const Content = styled.div`
  border-radius: 4px;
  background-color: cyan;
  width: 90%;
  padding: 4px;
  margin: 0 6px;
  align-self: flex-end;
`;

const Image = styled.div`
  overflow: hidden;
  position: relative;
  max-height: 300px;
`;

export default function Event({ event }) {
  const { date, body, image, tweet } = event;
  return (
    <Container>
      <Content className="content">
        <time>{date}</time>
        <ReactMarkdown source={body} />
        {image && (
          <Image>
            <img src={image.src} alt={image.src} />
          </Image>
        )}

        {tweet && <TwitterTweetEmbed tweetId={tweet} />}
      </Content>
    </Container>
  );
}
