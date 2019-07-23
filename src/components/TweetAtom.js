import React, { useEffect } from "react";
import styled from "styled-components";

// TODO: show loading indicator while Tweet loads?

const Tweet = styled.div`
  .twitter-tweet {
    width: 100% !important;
  }
`;

export default function TwitterAtom({ date, id, text }) {
  useEffect(() => {
    window.twttr.widgets.createTweet(
      id,
      document.querySelector(`.tweet[data-id="${id}"]`)
    );
  }, [id]);

  return <Tweet className="tweet" data-id={id} />;
}
