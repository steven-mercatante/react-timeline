import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import TweetEmbed from "./TweetEmbed";
import YouTubeEmbed from "./YoutubeEmbed";
import Image from "./Image";
import EventContainer from "./EventContainer";
import EventContent from "./EventContent";
import EventMarker from "./EventMarker";

// TODO: avoid using !important in CSS

const Timestamp = styled.time`
  background-color: #ec24b5;
  position: ${({ inline }) => (inline ? "static" : "absolute")};
  top: calc(50% - 10px);
  color: #fff
  padding: 4px;
  margin-bottom: 4px;
  border-radius: 4px;
  font-weight: 500;
  font-size: .85rem;

  ${EventContainer}:nth-child(odd) & {
    left: calc(50% + 30px);
  }
  
  ${EventContainer}:nth-child(even) & {
    right: calc(50% + 30px);
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

  // TODO: not sure if opts should be a member of `event`
  const { date, body, image, tweetId, youTubeId, opts } = event;

  // TODO: can this be improved/made more clear?
  if (alternateEvents === false) {
    inlineDate = true;
  }

  const containerClasses = ["event"];
  if (opts && opts.cssClass) {
    containerClasses.push(opts.cssClass);
  }

  return (
    <EventContainer
      className={containerClasses.join(" ")}
      ref={eventRef}
      isVisible={isVisible}
      alternateEvents={alternateEvents}
    >
      {!inlineDate && <Timestamp>{date}</Timestamp>}
      <EventMarker className="marker" alternateEvents={alternateEvents} />
      <EventContent className="content" alternateEvents={alternateEvents}>
        {inlineDate && <Timestamp inline={true}>{date}</Timestamp>}
        <ReactMarkdown source={body} />
        {image && <Image {...image} />}
        {tweetId && <TweetEmbed id={tweetId} />}
        {youTubeId && <YouTubeEmbed id={youTubeId} />}
      </EventContent>
    </EventContainer>
  );
}
