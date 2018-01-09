import { StyleSheet } from 'react-native';
import { LIGHT_BLUE, RED } from '../../../utils/colors';

const styles = StyleSheet.create({
  addContainer: {
    marginTop: 50,
    marginBottom: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: '5%',
    paddingRight: '5%',
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: LIGHT_BLUE
  },
  label: {
    width: '15%',
    alignSelf: 'center'
  },
  input: {
    width: '70%'
  },
  addIcon: {
    width: '5%',
    alignSelf: 'center'
  },
  error: {
    color: RED,
    textAlign: 'center',

  }
});

export default styles;