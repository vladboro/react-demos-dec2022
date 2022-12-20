import React from "react";
import ApprovalCard from "./ApprovalCard";
import CommentDetail from "./CommentDetail";

const Comments = () => (
  <div className="ui container">
    <h3 className="ui dividing header">Comments</h3>
    <div className="ui cards">
      <ApprovalCard>
        <CommentDetail author="Vasya" />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail author="Petya" />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail author="Masha" />
      </ApprovalCard>
    </div>
    <form className="ui reply form">
      <div className="field">
        <textarea></textarea>
      </div>
      <div className="ui blue labeled submit icon button">
        <i className="icon edit"></i> Add Reply
      </div>
    </form>
  </div>
);

export default Comments;
