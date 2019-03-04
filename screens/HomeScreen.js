import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class HomeScreen extends Component {
  render() {
    return (
      <View>
          <Text>Home Screen</Text>
          <Button
            title="Add an Item"
            onPress={() => this.props.navigation.navigate('AddEntry')}
          />
          <Button
            title="List of Items"
            color="green"
            onPress={() => this.props.navigation.navigate('List')}
          />
          <Button
            title="Order Now"
            color="blue"
            onPress={() => this.props.navigation.navigate('Ordering')}
          />
      </View>
    );
  }
}
