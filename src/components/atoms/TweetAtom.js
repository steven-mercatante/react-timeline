import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

// TODO: show loading indicator while Tweet loads?

const Loading = styled.div(props => {
  const defaults = {
    width: "100%",
    height: "200px",
    backgroundColor: "#fff"
  };

  const style = { ...defaults, ...props.theme.twitterAtomLoading };

  return style;
});

const Tweet = styled.div(props => {
  const defaults = {
    ".twitter-tweet": {
      width: "100% !important"
    }
  };

  const style = { ...defaults, ...props.theme.twitterAtom };

  return style;
});

export default function TweetAtom({ id }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.twttr.widgets
      .createTweet(id, document.querySelector(`.tweet[data-id="${id}"]`))
      .then(resp => {
        setLoading(false);
      });
  }, [id]);

  return (
    <React.Fragment>
      {loading && <Loading className="tweet-loading" />}
      <Tweet className="tweet" data-id={id} />
    </React.Fragment>
  );
}

TweetAtom.propTypes = {
  id: PropTypes.string.isRequired
};
