import React from 'react';
import ReactDOM from 'react-dom';

const ReviewItem = (props) => (
  <div>
    <img src={props.user_avatar} style={{'width':'5%', 'height':'5%', 'float': 'left'}}/>
    <span>{props.user_name}</span>
    <br></br>
    <span>{props.review_date}</span>
    <p style = {{'clear': 'both'}}>
      {props.review_content}
    </p>
  </div>
);


export default ReviewItem;
