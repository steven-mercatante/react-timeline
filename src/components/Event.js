import React, { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import TweetEmbed from "./TweetEmbed";
import YouTubeEmbed from "./YoutubeEmbed";
import Image from "./Image";
import EventContainer from "./EventContainer";
import EventContent from "./EventContent";
import EventMarker from "./EventMarker";
import EventTimestamp from "./EventTimestamp";

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
      {!inlineDate && <EventTimestamp>{date}</EventTimestamp>}
      <EventMarker className="marker" alternateEvents={alternateEvents} />
      <EventContent className="content" alternateEvents={alternateEvents}>
        {inlineDate && <EventTimestamp inline={true}>{date}</EventTimestamp>}
        <ReactMarkdown source={body} />
        {image && <Image {...image} />}
        {tweetId && <TweetEmbed id={tweetId} />}
        {youTubeId && <YouTubeEmbed id={youTubeId} />}
      </EventContent>
    </EventContainer>
  );
}
