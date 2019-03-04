import React, { Component } from 'react';
import { View, Text } from 'react-native';

import AddEntry from '../components/AddEntry';

export default class AddEntryScreen extends Component {
  render() {
    return (
      <View>
        <AddEntry navigation={this.props.navigation} />
      </View>
    );
  }
}
