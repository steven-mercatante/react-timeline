import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Image = styled.img(props => {
  const defaults = {
    objectFit: "cover",
    overflow: "hidden",
    width: "100%"
  };

  const style = { ...defaults, ...props.theme.imageAtom };

  return style;
});

export default function ImageAtom({ src, alt }) {
  return <Image src={src} alt={alt} />;
}

ImageAtom.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string
};
