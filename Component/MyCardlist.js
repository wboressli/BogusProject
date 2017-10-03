import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Text, Icon, Right } from 'native-base';
export default class MyCardList extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Card>
            <CardItem>
              <Icon active name="logo-googleplus" />
              <Text>Text Text Text</Text>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
             </CardItem>
           </Card>
        </Content>
      </Container>
    );
  }
}
