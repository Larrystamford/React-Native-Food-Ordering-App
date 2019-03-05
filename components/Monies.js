import React from 'react';
import {Card} from 'react-native-elements';
import {Text, View} from 'react-native';
import {styles} from './EntryFormStyles';

const Monies = (props) => {
  console.log(props.cost);
  return (
    <View style={styles.container}><Text style={styles.text_style}>Total Cost: $ {props.cost}</Text></View>
  )
}

export default Monies
