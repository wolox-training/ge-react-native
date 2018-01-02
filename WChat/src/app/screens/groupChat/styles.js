import { StyleSheet } from 'react-native';
import { LIGHT_BLUE, LIGHT_GREY } from '../../../utils/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  chatBodyMe: { 
    textAlign: 'right',
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: LIGHT_BLUE, 
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: LIGHT_GREY,
  },
  chatBodyHim: {
    textAlign: 'left',
    paddingLeft: 20,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: LIGHT_GREY,
  }
});

export default styles;