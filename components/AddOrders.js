import React, { Component } from 'react';
import { Button, Input } from 'react-native-elements';
import { View, Text } from 'react-native';

import {db} from '../database/config';
import {styles} from './EntryFormStyles';

export default class AddEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {ChickenSlices: '', AustralianBeef: '', CheesyBalls: '', submitMessage: ''};
    this.handleChickenChange = this.handleChickenChange.bind(this);
    this.handleBeefChange = this.handleBeefChange.bind(this);
    this.handleBallsChange = this.handleBallsChange.bind(this);
    this.submitForm = this.submitForm.bind(this);

  }
  handleChickenChange(ChickenSlices) {
    this.setState({ChickenSlices: ChickenSlices});
  }
  handleBeefChange(AustralianBeef) {
    this.setState({AustralianBeef: AustralianBeef});
  }
  handleBallsChange(CheesyBalls) {
    this.setState({CheesyBalls: CheesyBalls});
  }

  submitForm() {
    this.setState({submitMessage: 'Loading'});
    // object destructuring
    const {ChickenSlices, AustralianBeef, CheesyBalls} = this.state;
    console.log(ChickenSlices)
    

    // pushing the data under the Employees category.
    // Then and Catch is to return results and catch errors
    db.ref('Orders/').push({ChickenSlices, AustralianBeef, CheesyBalls}).then((data) => {
      this.setState({submitMessage: 'Order Recorded!'})
    }).catch((error) => {
      this.setState({submitMessage: 'Error, try again.'})
    })
  }
  render() {
    return (
      <View>
        <Input
          placeholder='Quantity (Each serving is 100g)'
          containerStyle={styles.entry}
          // errorStyle={{ color: 'red' }}
          // errorMessage='Name is required'
          onChangeText={this.handleChickenChange}
          />
          <Input
            placeholder='Quantity (Each serving is 100g)'
            containerStyle={styles.entry}
            onChangeText={this.handleBeefChange}
            />
          <Input
            placeholder='Quantity (Per Pc)'
            containerStyle={styles.entry}
            onChangeText={this.handleBallsChange}
            />
        <Button raised rightIcon={{name: 'check'}} title='Submit Your Order' onPress={this.submitForm}/>
        <Text>{this.state.submitMessage}</Text>
        <Button
          raised
          large
          title='Back'
          onPress={() => this.props.navigation.navigate('Home')}
        />
      </View>
    )
  }
}
