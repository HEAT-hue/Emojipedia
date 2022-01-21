// jshint esversion:6
import React from "react";

function Description(props) {
  return (
    <div className="desc-container">
      <dt className="desc-title">
        <span role="img" aria-label={props.title}>{props.emoji}</span>
        <span className="title">{props.title}</span>
      </dt>
      <dd>{props.body}</dd>
    </div>
  )
}

export default Description;