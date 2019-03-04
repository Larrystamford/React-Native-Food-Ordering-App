import React from 'react';
import {Card} from 'react-native-elements';
import {Text, View} from 'react-native';
import {styles} from './EntryFormStyles';

const Employee = (props) => {
  const {address, name, position} = props;
  return (
    <Card title={name}>
      <Text style={styles.entry}> Address : {address} </Text>
      <Text> Position: {position} </Text>
    </Card>
  )
}

export default Employee
