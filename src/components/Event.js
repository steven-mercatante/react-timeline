import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import TweetEmbed from "./TweetEmbed";
import YouTubeEmbed from "./YoutubeEmbed";
import Image from "./Image";

// TODO: avoid using !important in CSS

const Container = styled.div`
  // border: 1px solid green;
  position: relative;
  display: flex;
  margin-bottom: 20px;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0.15)};
  transition: opacity 0.25s ease-in;

  :nth-child(1) {
    margin-top: 20px;
  }

  ${({ alternateEvents }) =>
    alternateEvents &&
    `:nth-child(odd) {
      flex-direction: row-reverse;
    }`}

  @media (max-width: 768px) {
    flex-direction: row !important;

    .content {
      max-width: 80%;
    }

    :nth-child(odd) {
      .content {
        // border: 1px solid red;
        left: 80px !important;
      }
    }

    :nth-child(even) {
      .content {
        // border: 1px solid yellow;
        left: 80px !important;
      }
    }
  }
`;

const Content = styled.div`
  position: relative;
  border-radius: 4px;
  background-color: #4e4e50;
  color: #fff;
  padding: 10px;
  max-width: ${({ alternateEvents }) => (alternateEvents ? "42%" : "88%")};

  ${Container}:nth-child(odd) & {
    left: ${({ alternateEvents }) => (alternateEvents ? "auto" : "80px")};
    right: ${({ alternateEvents }) =>
      alternateEvents ? "calc(50% + 30px)" : 0};
  }

  ${Container}:nth-child(even) & {
    left: ${({ alternateEvents }) =>
      alternateEvents ? "calc(50% + 30px)" : "80px"};
  }
`;

const Timestamp = styled.time`
  background-color: #ec24b5;
  position: ${({ inline }) => (inline ? "static" : "absolute")};
  top: calc(50% - 10px);
  color: #fff
  padding: 4px;
  border-radius: 4px;
  font-weight: 500;
  font-size: .85rem;

  ${Container}:nth-child(odd) & {
    left: calc(50% + 30px);
  }
  
  ${Container}:nth-child(even) & {
    right: calc(50% + 30px);
  }
`;

const Marker = styled.span`
  position: absolute;
  top: calc(50% - 10px);
  left: ${({ alternateEvents }) =>
    alternateEvents ? "calc(50% - 12px)" : "32px"};
  background-color: #eb2db4;
  border: 2px solid #eb2db4;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  z-index: 100;

  @media (max-width: 768px) {
    left: 32px;
  }
`;

export default function Event({ event, alternateEvents, inlineDate }) {
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

  // TODO: can this be improved/made more clear?
  if (alternateEvents === false) {
    inlineDate = true;
  }

  return (
    <Container
      className="event"
      ref={eventRef}
      isVisible={isVisible}
      alternateEvents={alternateEvents}
    >
      {!inlineDate && <Timestamp>{date}</Timestamp>}
      <Marker className="marker" alternateEvents={alternateEvents} />
      <Content className="content" alternateEvents={alternateEvents}>
        {inlineDate && <Timestamp inline={true}>{date}</Timestamp>}
        <ReactMarkdown source={body} />
        {image && <Image {...image} />}
        {tweet && <TweetEmbed id={tweet} />}
        {youtube && <YouTubeEmbed id={youtube} />}
      </Content>
    </Container>
  );
}
