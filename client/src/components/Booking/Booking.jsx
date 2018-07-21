import React from 'react';
import { Card } from 'semantic-ui-react';
import ReactStars from 'react-stars';
import styled from 'styled-components';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

const VertAlignedStars = styled(ReactStars)`
  display: inline-block;
  vertical-align: middle;
`;

const SmallText = styled.span`
  font-size: 12px;
`;

const BigText = styled.span`
  font-size: 22px;
`;

const LightDivide = styled.hr`
  opacity: 0.5;
`;

const CardContainer = styled.div`
  width: 376px;
`;

class Booking extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      startDate: null,
      endDate: null,
      focusedInput: null
    };
  }

  render() {
    return (
      <CardContainer>
        <Card fluid>
          <Card.Content>
            <Card.Header>
              <BigText>$70</BigText> <SmallText>per night</SmallText>
              <div>
                <VertAlignedStars count={5} size={12} value={5} color2={'#137269'} edit={false}/> <SmallText>580</SmallText>
              </div>
              <LightDivide></LightDivide>
            </Card.Header>
          </Card.Content>
          <Card.Content>
            <SmallText><strong>Dates</strong></SmallText>
            <br />
            <DateRangePicker
              startDate={this.state.startDate} // momentPropTypes.momentObj or null,
              startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
              endDate={this.state.endDate} // momentPropTypes.momentObj or null,
              endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
              onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
              focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
              onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
            />
          </Card.Content>
        </Card>
      </CardContainer>
    )
  }
}

export default Booking;