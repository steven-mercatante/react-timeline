import React from "react";
import styled from "styled-components";
import ConditionalMarkdown from "./ConditionalMarkdown";
import CardWrapper from "./CardWrapper";
import YouTubeAtom from "./YouTubeAtom";

export default function YouTubeCard({ date, id, name, text }) {
  return (
    <CardWrapper date={date}>
      <ConditionalMarkdown>{text}</ConditionalMarkdown>
      <YouTubeAtom id={id} name={name} />
    </CardWrapper>
  );
}
