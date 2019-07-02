import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import useLocalStorage from "react-use-localstorage";


class Rating extends React.Component {
  constructor() {
    super();

    this.state = {
      rating: 0
    };
  }

  onStarClick(nextValue, prevValue, name) {
    this.setState({rating: nextValue});
  }
App() {
useLocalStorage(this.state.rating, 'rate');
}

  render() {
    const { rating } = this.state;

    return (                
      <div>
        <h2>How Did you Like this Show?</h2>
        <StarRatingComponent 
          name="rate1" 
          starCount={10}
          value={rating}
          onStarClick={this.onStarClick.bind(this)}
        /><br /><span> {rating} stars</span>
      </div>
    );
  }
}

export default Rating