import React from "react";
import CardWrapper from "./CardWrapper";
import TextAtom from "./TextAtom";

export default function TextCard({ date, text, children }) {
  return (
    <CardWrapper date={date}>
      <TextAtom text={text} />
      {children}
    </CardWrapper>
  );
}
