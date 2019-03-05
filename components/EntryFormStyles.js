import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  entry: {
    width: '75%'
  },
  text: {
    width: '75%'
  },
  item_style: {
    height: 200,
    width: 200,
    // borderWidth: 1,
    // borderColor: '#ff00ff'
  },
  divider: {
    color:'#000000',
    height: '10%',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
    opacity: 0.9,
    color: '#000000'
  },
  button: {
    backgroundColor: 'green',
    width: '40%',
    height: 40
  },
  counter_button: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    width: 50,
    flex: 0
  },
  payment_button: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 475,
    flex: 0,
  },
  cost_display: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 200,
    flex: 1,
  },
  text_style: {
    fontSize: 50,
    fontWeight: '500',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#0000ff'
  }
})
