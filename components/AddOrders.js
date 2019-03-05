import React, { Component } from 'react';
import { Button, Input } from 'react-native-elements';
import { View, ScrollView, Text, Image } from 'react-native';
import { CompleteComponent } from '../components/';
import {db} from '../database/config';
import {styles} from './EntryFormStyles';


export default class AddEntry extends Component {
  constructor(props) {
    super(props);
    // this.state = {[{}, {}, {}]}
    this.state = {ChickenSlices: 0, AustralianBeef: 0, CheesyBalls: 0, submitMessage: ''};
   

    this.changeChickenCounter = this.changeChickenCounter.bind(this);
    this.changeBeefCounter = this.changeBeefCounter.bind(this);
    this.changeBallCounter = this.changeBallCounter.bind(this);

    this.submitForm = this.submitForm.bind(this);

  }

  changeChickenCounter(num) {
    this.setState({ChickenSlices: this.state.ChickenSlices + num})
  }

  changeBeefCounter(num) {
    this.setState({AustralianBeef: this.state.AustralianBeef + num})

  }

  changeBallCounter(num) {
    this.setState({CheesyBalls: this.state.CheesyBalls + num})
  }

  submitForm() {
    this.setState({submitMessage: 'Loading'});
    // object destructuring
    // let so that it can be changed
    let {ChickenSlices, AustralianBeef, CheesyBalls} = this.state;
    ChickenSlices = ChickenSlices*2;
    AustralianBeef = AustralianBeef*3;
    CheesyBalls = CheesyBalls*0.5;
    const total_cost = CheesyBalls + AustralianBeef +ChickenSlices

    // pushing the data under the Employees category.
    // Then and Catch is to return results and catch errors
    db.ref('cost/').push({ChickenSlices, AustralianBeef, CheesyBalls, total_cost}).then((data) => {
      this.setState({submitMessage: 'Order Recorded!'})
      this.props.navigation.navigate('Payment')

    }).catch((error) => {
      this.setState({submitMessage: 'Error, try again.'})
      console.log(error)
    })
  }
  
  render() {
    return (
      <ScrollView>
        
      <View style={styles.container}>
        <Image
          style={styles.item_style}
          source={require('./beef.jpg')}
        />
        <View style={styles.counter_button}>
          <CompleteComponent counterfunc={this.changeBeefCounter}/>
        </View>
      </View>
      <View style={styles.container}>
        <Image
          style={styles.item_style}
          source={require('./chicken.jpg')}
        />
        <View style={styles.counter_button}>
          <CompleteComponent counterfunc={this.changeChickenCounter}/>
        </View>
      </View>
      <View style={styles.container}>
        <Image
          style={styles.item_style}
          source={require('./ball.jpg')}
        />
        <View style={styles.counter_button}>
          <CompleteComponent counterfunc={this.changeBallCounter} />
        </View>
      </View>
        <Button
          raised large title='Submit Your Order' onPress={this.submitForm}
        />
      </ScrollView>
    )
  }
}
