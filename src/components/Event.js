import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import TweetEmbed from "./TweetEmbed";
import YouTubeEmbed from "./YoutubeEmbed";
import Image from "./Image";
import EventMarker from "./EventMarker";

const Container = styled.div`
  // border: 1px solid red;
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

      .marker {
        left: -40px;
      }
    }
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
  transition: opacity 0.5s ease-in;
`;

const Timestamp = styled.time`
  background-color: yellow;
  color: green;
  position: absolute;
  top: calc(50% - 10px);
  ${({ placement }) => placement === 0 && `right: -110px`}
  ${({ placement }) => placement === 1 && `left: -110px`}
  z-index: 100;
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
        <Timestamp placement={placement}>{date}</Timestamp>
        <ReactMarkdown source={body} />
        {image && <Image {...image} />}
        {tweet && <TweetEmbed id={tweet} />}
        {youtube && <YouTubeEmbed id={youtube} />}
      </Content>
      <EventMarker className="marker" />
    </Container>
  );
}
