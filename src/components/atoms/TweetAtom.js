import React, { useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

// TODO: show loading indicator while Tweet loads?

const Tweet = styled.div`
  .twitter-tweet {
    width: 100% !important;
  }
`;

export default function TweetAtom({ id }) {
  useEffect(() => {
    window.twttr.widgets.createTweet(
      id,
      document.querySelector(`.tweet[data-id="${id}"]`)
    );
  }, [id]);

  return <Tweet className="tweet" data-id={id} />;
}

TweetAtom.propTypes = {
  id: PropTypes.string.isRequired
};
