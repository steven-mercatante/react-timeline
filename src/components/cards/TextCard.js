import React from "react";
import CardWrapper from "../cards/CardWrapper";
import TextAtom from "../atoms/TextAtom";

export default function TextCard({ date, text, children }) {
  return (
    <CardWrapper date={date}>
      <TextAtom text={text} />
      {children}
    </CardWrapper>
  );
}
