import React from 'react';
import { listings } from '../../data/mockedDataSearch';
import Suggestions from './Suggestions.jsx'
import { Form } from 'semantic-ui-react'
import styled from 'styled-components';

const Div = styled.div`
  width: 50%;
  margin: 3% auto;
  padding-top: 25px;
`;

const HeaderDiv = Div.extend`
  font-size: 25px;
  margin-left: 20px !important;
  color: #696969;
  font-weight: bold;
`;

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      results: []
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
    let results = listings.filter(listing => 
      listing.city === 'San Francisco'
    );
    this.setState({
      results: results,
      query: 'San Francisco'
    })
  }
 
  handleInputChange() {
    this.setState({
      query: this.search.value
    }, () => {
      this.state.query && this.state.query.length > 1 ? this.getInfo(this.search.value) : '';
    })
  }

  handleKeyPress(e, cb) {
    if(e.charCode === 13 && e.target.value.length) {
      e.preventDefault();
      cb();
    }
  }

  getInfo(location) {
    let results = listings.filter(listing => 
      listing.unitAddress.toLowerCase().includes(location.toLowerCase())
    );
    this.setState({
      results: results
    })
  }
 
  render() {
    return (
      <Form>
        <Div>
          <Form.Field>
            <input style={ {backgroundImage: 'url(searchIcon.png)', backgroundPosition: 'left center', backgroundRepeat: 'no-repeat', paddingLeft: '40px', height: '48px'} }
              placeholder='Destination...'
              ref={input => this.search = input}
              onChange={this.handleInputChange}
              onKeyPress={(e)=>{this.handleKeyPress(e, this.handleInputChange)}}
            />
          </Form.Field>
        </Div>
        {this.state.query === 'San Francisco' ? <HeaderDiv>Places to stay near you</HeaderDiv> : ''}
        {!this.state.query.length ? '' 
          : (this.state.results.length > 0 
            ? 
              <Suggestions results={this.state.results} /> 
            : 
              <Div> 
                No result found for the search criteria 
            </Div>
          )
        }
      </Form>
    )
  }
}
 
export default Search;