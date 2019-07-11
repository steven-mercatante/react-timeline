import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import TweetEmbed from "./TweetEmbed";
import YouTubeEmbed from "./YoutubeEmbed";
import Image from "./Image";

const Container = styled.div`
  border: 1px solid red;
  position: relative;
  display: flex;
  margin-bottom: 20px;

  :nth-child(1) {
    margin-top: 20px;
  }

  :nth-child(even) {
    flex-direction: row-reverse;
    border-color: orange;
  }
`;

const Content = styled.div`
  border: 1px solid blue;
  display: flex;
  // align-items: center;

  // opacity: ${({ isVisible }) => (isVisible ? 1 : 0.25)};
  // transition: opacity 0.25s ease-in;
  position: relative;
  
  ${Container}:nth-child(odd) & {
    left: 52%;
  }

  ${Container}:nth-child(even) & {
    left: auto;
    right: 52%;
  }
`;

const Timestamp = styled.time`
  background-color: #ec24b5;
  position: absolute;
  top: calc(50% - 10px);
  color: #fff
  padding: 4px;
  border-radius: 4px;
  font-weight: 500;
  font-size: .85rem;

  ${Container}:nth-child(odd) & {
    right: 52%;
  }

  ${Container}:nth-child(even) & {
    left: 52%;
  }
`;

const Marker = styled.span`
  background-color: cyan;
  border: 2px solid cyan;
  // background-color: #ee18b6;
  // border: 2px solid #ee18b6;
  border-radius: 50%;
  // top: calc(50% - 10px);
  // right: -40px;
  width: 20px;
  height: 20px;
`;

const Bubble = styled.div`
  border: 1px solid yellow;
  border-radius: 4px;
  background-color: #4e4e50;
  color: #fff;
  min-width: 200px;
  max-width: 500px;
  padding: 10px;
`;

export default function Event({ event, placement }) {
  // console.log("Event.render()");
  const [isVisible, setIsVisible] = useState(false);
  const eventRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5
      }
    );
    observer.observe(eventRef.current);
  });

  // TODO: s/tweet/tweetId
  // TODO: s/youTube/youTubeId
  const { date, body, image, tweet, youtube } = event;

  return (
    <Container className="event" ref={eventRef}>
      <Timestamp placement={placement} inline={false}>
        {date}
      </Timestamp>
      {/* <Marker className="marker" /> */}
      <Content className="content" isVisible={isVisible}>
        <Bubble>
          <ReactMarkdown source={body} />
          {image && <Image {...image} />}
          {tweet && <TweetEmbed id={tweet} />}
          {youtube && <YouTubeEmbed id={youtube} />}
        </Bubble>
      </Content>
    </Container>
  );
}
