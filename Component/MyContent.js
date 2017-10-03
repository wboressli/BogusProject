import React from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { observer } from "mobx-react";
import MyButton from './MyButton';
import MyCard from './MyCard';
import Api from './Api';
import MyCardList from './MyCardlist';
import { NativeRouter,Route , Link } from 'react-router-native';
import {View} from 'react-native';

export default observer(class MyContent extends React.Component {
render() {
  return (
    <NativeRouter>
    <Container>
      <Content>
        <Route exact path="/" component={MyButton} />
        <Route path="/z" render={
          ()=> <MyCard store={this.props.store} />} />
        <Route path="/y" render ={
          ()=> <MyButton store={this.props.store} />}
         />
         <Route exact path="/c" render={
           ()=> <Api store={this.props.store} />}
           />

      </Content>
      <Footer>
        <FooterTab>
          <Button>
            <Link exact to="/c"><View><Icon name="apps"/></View></Link>
          </Button>
          <Button>
            <Link to="/z"><View><Icon name="navigate"/></View></Link>
          </Button>
          <Button>
            <Link to="/y"><View><Icon name="camera"/></View></Link>
          </Button>
        </FooterTab>
      </Footer>
      </Container>
      </NativeRouter>
  );
}
})
