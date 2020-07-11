import React from "react";

const Topic = (props) => (
  <div>
    {props.topic.title}
    {props.topic.link && <a href={props.topic.link}> - Github</a>}
    {props.topic.subtopics &&
      (props.topic.subtopics[0].title.startsWith("http") ? (
        <a href={props.topic.subtopics[0].title}> - Link</a>
      ) : (
        `: ${props.topic.subtopics.map((skill) => ` ${skill.title}`)}`
      ))}
  </div>
);

export default Topic;
