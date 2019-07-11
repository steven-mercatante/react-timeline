import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import TweetEmbed from "./TweetEmbed";
import YouTubeEmbed from "./YoutubeEmbed";
import Image from "./Image";

const Container = styled.div`
  // border: 1px solid red;
  display: flex;
  justify-content: flex-end;
  align-self: flex-start;
  width: 50%;
  margin-bottom: 20px;

  :nth-child(1) {
    margin-top: 20px;
  }

  :nth-child(even) {
    align-self: flex-end;
    justify-content: flex-start;
  }
`;

const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  border-radius: 4px;
  background-color: #4e4e50;
  color: #fff;
  min-width: 200px;
  max-width: 700px;
  padding: 10px;
  margin: 0 27px;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0.25)};
  transition: opacity 0.25s ease-in;

  ${Container}:nth-child(even) & {
    align-items: flex-start;
  }
`;

const Timestamp = styled.time`
  background-color: #ec24b5;
  color: #fff
  padding: 4px;
  border-radius: 4px;
  font-weight: 500;
  font-size: .85rem;
  position: ${({ inline }) => (inline === true ? "static" : "absolute")};
  top: calc(50% - 10px);
  ${({ placement }) => placement === 0 && `right: -110px`}
  ${({ placement }) => placement === 1 && `left: -110px`}
  z-index: 100;
`;

const Marker = styled.span`
  background-color: #ee18b6;
  border: 2px solid #ee18b6;
  border-radius: 50%;
  position: absolute;
  top: calc(50% - 10px);
  right: -40px;
  width: 20px;
  height: 20px;
  z-index: 100;

  ${Container}:nth-child(even) & {
    left: -40px;
  }
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
      <Content className="content" isVisible={isVisible}>
        <Timestamp placement={placement} inline={false}>
          {date}
        </Timestamp>
        <ReactMarkdown source={body} />
        {image && <Image {...image} />}
        {tweet && <TweetEmbed id={tweet} />}
        {youtube && <YouTubeEmbed id={youtube} />}
        <Marker className="marker" />
      </Content>
    </Container>
  );
}
