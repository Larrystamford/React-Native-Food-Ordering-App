import React, { Component } from 'react';
import { View, Text } from 'react-native';
import RetrieveDBContainer from '../containers/RetrieveDBContainer';

export default class ListScreen extends Component {
  render() {
    return (
      <View>
        <RetrieveDBContainer navigation={this.props.navigation}/>
      </View>
    );
  }
}
