import React from "react";
import { faker } from "@faker-js/faker";

const CommentDetail = (props) => (
  <div className="comment">
    <a className="avatar">
      <img src={faker.image.avatar()} alt="" />
    </a>
    <div className="content">
      <a className="author">{props.author}</a>
      <div className="metadata">
        <span className="date">{faker.date.past().toLocaleDateString()}</span>
      </div>
      <div className="text">
        <p>{faker.random.words(10)}</p>
      </div>
      <div className="actions">
        <a className="reply">Reply</a>
      </div>
    </div>
  </div>
);
export default CommentDetail;
