import React from 'react';

function formatDate(date) {
  return date.toLocaleDateString();
}

function Comment(props) {
  return (
    <div>
      <div>
        <img src={props.author.avatarUrl} alt={props.author.name} />
        <div>{props.author.name}</div>
      </div>
      <div>{props.text}</div>
      <div>{formatDate(props.date)}</div>
    </div>
  );
}

export default Comment;
