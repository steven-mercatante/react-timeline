import React from "react";
import Card from "./Card";
import TextAtom from "../atoms/TextAtom";

export default function TextCard({ date, text, children }) {
  return (
    <Card date={date}>
      <TextAtom text={text} />
      {children}
    </Card>
  );
}
