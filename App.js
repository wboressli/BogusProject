import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MyContent from './Component/MyContent';

export default class App extends React.Component {
  async componentWillMount() {
      this.setState({ isReady: false });
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
    });

    this.setState({ isReady: true });
  }
  render() {
    if(this.state.isReady) {
      return (
        <MyContent />
      );
    } else {
      return (
        <Text>hehe keep waiting ;)</Text>
      )
    }
  }
}
