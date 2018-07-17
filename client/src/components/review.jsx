import React from 'react';
import ReactDOM from 'react-dom';
import ReactStars from 'react-stars';
import {reviewList, listingRatings} from '../data/mock-data-review.js';
import ReviewItem from './reviewitem.jsx';

class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'reviewList': reviewList
    }
  }

  render() {
    return (
      <div>
        <div>
          <h2 style={{'float': 'left'}}>580 Reviews</h2>
          <ReactStars count={5} size={30} value ={5} color2={'#137269'} edit={false}/>
        </div>
        <div style={{'clear': 'both'}}>
          <span style={{'float': 'left'}}>Accuracy</span>
          <ReactStars count={5} size={24} value={listingRatings.Accuracy} color2={'#137269'} edit={false}/>
          <span style={{'float': 'left'}}>Location</span>
          <ReactStars count={5} size={24} value={listingRatings.Location} color2={'#137269'} edit={false}/>
          <span style={{'float': 'left'}}>Communication</span>
          <ReactStars count={5} size={24} value={listingRatings.Communication} color2={'#137269'} edit={false}/>
          <span style={{'float': 'left'}}>Check-in</span>
          <ReactStars count={5} size={24} value={listingRatings.Checkin} color2={'#137269'} edit={false}/>
          <span style={{'float': 'left'}}>Cleanliness</span>
          <ReactStars count={5} size={24} value={listingRatings.Cleanliness} color2={'#137269'} edit={false}/>
          <span style={{'float': 'left'}}>Value</span>
          <ReactStars count={5} size={24} value={listingRatings.Value} color2={'#137269'} edit={false}/>
        </div>
        {reviewList.map(review => <ReviewItem key={review.review_id} user_avatar={review.user_avatar} user_name={review.user_name} review_date={review.review_date} review_content={review.review_content}/>)}


      </div>
      )
  }
};


export default Review;



