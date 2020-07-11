import React from "react";

const Topic = (props) => (
  <div>
    {props.topic.title}
    {props.topic.link && <a href={props.topic.link}> - Github</a>}
    {props.topic.subtopics && (
      <a href={props.topic.subtopics[0].title}> - Link</a>
    )}
  </div>
);

export default Topic;
