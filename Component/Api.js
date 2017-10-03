import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, List, ListItem } from 'native-base';
import {ListView} from 'react-native';
import { observer } from "mobx-react";
import { Card, CardItem, Thumbnail } from 'native-base';

export default observer(class Api extends Component {
  constructor(props){
    super(props);
    this.state = {
      url: "https://api.github.com/events",
      dataSource: new ListView.DataSource({
        rowHasChanged:(row1, row2) => row1 !== row2,
      })
    }
  }
  componentWillMount(){
    // if (!this.props.store.loaded){
    //   this.fetchData();
    // }
    // else {
    //   this.setState({dataSource: this.state.dataSource.cloneWithRows(this.props.store.dataSource)})
    // }
    this.fetchData();
    console.log("inside componentWillMount");
  }
  fetchData(){
    fetch(this.state.url)
    .then((x) => x.json())
    .then((y) => {
      console.log('something should happen');
    this.setState({dataSource: this.state.dataSource.cloneWithRows(y)});
    // this.props.store.dataSource = y;
    // this.props.store.loaded = true;
  })
  .catch((error) => console.log(error)).done();
  }
  renderItem(object){
    return (
      <Card>
  <CardItem>
    <Left>
      <Thumbnail source={{uri: object.actor.avatar_url}} />
      <Body>
        <Text>{object.actor.login}</Text>
        <Text note>{object.actor.display_login}</Text>
      </Body>
    </Left>
  </CardItem>
  </Card>
    )
  }
  render() {
    return (
      <Container>
      <Text>Anything</Text>
      <List>
      <ListView
      dataSource={this.state.dataSource}
      renderRow={this.renderItem}
      />
          </List>

      </Container>
    );
  }
}
)
