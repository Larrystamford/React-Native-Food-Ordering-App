import React from 'react';
import { ImageBackground, View, Text, StyleSheet, Linking, Image } from 'react-native';
import { Button } from 'react-native-elements';
import {styles} from '../components/EntryFormStyles';
import RetrieveCostDB from '../containers/RetrieveCostDB';

export default class Payment extends React.Component {
    render() {
      return (
        <ImageBackground source={require('./mala_background.jpg')} style={{width:'100%', height:'100%'}} resizeMode='cover'>
        <View>
          <Button containerStyle={styles.payment_button}
          title="Proceed to Payment" 
          onPress={ ()=>{ Linking.openURL('https://www.dbs.com.sg/personal/mobile/paylink/index.html?tranRef=TpGapC9E9e')}} />
        </View>
        <RetrieveCostDB navigation={this.props.navigation}/>
        </ImageBackground>
      );
    }
  }

