import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Button,Text, spinner } from 'native-base';
import { observer } from "mobx-react";


export default observer(class MyButton extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }
  ChangeName(e){
    this.props.store.name = this.state.text
  }
  render() {
    return (
      <Content>
        <Form>
        <Text>{this.props.x}</Text>
          <Item>
            <Input placeholder="Name"
                  onChangeText={ (x) => this.setState({ text: x }) }
            />
          </Item>
          <Button
          onPress={this.ChangeName.bind(this)}
          light><Text>Show me Stuff</Text></Button>
        </Form>
      </Content>

    );
  }
})
