import React from 'react';
import { Card } from 'semantic-ui-react';
import ReactStars from 'react-stars';
import styled from 'styled-components';

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

class Booking extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Card>
        <Card.Content>
          <Card.Header>
            <BigText>$70</BigText> <SmallText>per night</SmallText>
            <div>
              <VertAlignedStars count={5} size={12} value={5} color2={'#137269'} edit={false}/> <SmallText>580</SmallText>
            </div>
            <LightDivide></LightDivide>
          </Card.Header>
        </Card.Content>
      </Card>
    )
  }
}

export default Booking;