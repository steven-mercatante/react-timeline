import React from "react";

export default function YouTubeEmbed({ id, name }) {
  return (
    <iframe
      title={name}
      width="560"
      height="315"
      src={`https://www.youtube.com/embed/${id}`}
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  );
}
