import React, { Component } from 'react';
import styled from 'styled-components';
import { details } from '../data/mockpagedetail.js';
import { Grid, Sticky } from 'semantic-ui-react';

import Navbar from './Navbar/Navbar.jsx';
import ListingPage from './Details/ListingPage.jsx';
import Booking from './Booking/Booking.jsx';
import Review from './Review/Review.jsx';

const Div = styled.div`
  margin: 90px auto 0 auto;
  max-width: 1080px;
  padding: 0 1rem;
`;

const MobileBookingWrapper = styled.div`
  @media (min-width: 1200px) {
    display: none;
  }
`;

class MainLayout extends Component {
  constructor(props) {
    super(props);

    this.handleStickyContextRef = this.handleStickyContextRef.bind(this);
  }

  handleStickyContextRef(context) {
    this.setState({
      stickyContextRef: context
    });
  }

  render() {
    let currentListing = details.find((listing) => {
      return listing.id+"" === this.props.match.params.id;
    });
    if(currentListing) {
      return (
        <React.Fragment>
          <div>
            <Navbar />
          </div>
          <Div>
            <Grid>
              <Grid.Row>
                <Grid.Column mobile={16} tablet={16} largeScreen={9} widescreen={9}>
                  <ListingPage {...this.props} listingId={this.props.match.params.id} currentListing={currentListing} />
                  <MobileBookingWrapper><Booking {...this.props} listingId={this.props.match.params.id} /></MobileBookingWrapper>
                  <Review {...this.props} listingId={this.props.match.params.id} />
                </Grid.Column>
                <Grid.Column largeScreen={7} only="large screen">
                  <Booking {...this.props} listingId={this.props.match.params.id} />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Div>
        </React.Fragment>
      )
    } else {
      return (<p>Listing not found.</p>);
    }
  }
}

export default MainLayout;