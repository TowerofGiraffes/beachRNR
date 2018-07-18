import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const ReviewItemAvatar = styled.img`
  width: 5%;
  height: 5%;
  float: left;
  border-radius: 50%;
`;

const ReviewContent = styled.div`
  clear: both;
  height: 4.8em;
  line-height: 1.2em;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ReviewItem = (props) => (
  <div>
    <ReviewItemAvatar src={props.user_avatar} />
    <span>{props.user_name}</span>
    <br></br>
    <span>{props.review_date}</span>
    <ReviewContent>
      <p>
      {props.review_content}
      </p>
    </ReviewContent>
  </div>
);


export default ReviewItem;
