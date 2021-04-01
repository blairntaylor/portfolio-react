import React from "react";

function Card(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.title} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Title:</strong> {props.title}
          </li>
          <li>
            <strong>Description:</strong> {props.description}
          </li>
          <li>
            <a href={props.github} target="_blank" rel="noopener noreferrer">
              <strong>Link To Deployed Version</strong>
            </a>
          </li>
          <li>
            <a href={props.heroku} target="_blank" rel="noopener noreferrer">
              <strong></strong>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Card;
