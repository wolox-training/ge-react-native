import { StyleSheet } from 'react-native';
import { LIGHT_BLUE, LIGHT_GREY, NOT_THAT_LIGHTER_GREY, LIGHTER_GREY, SOFT_BLACK, DARK_BLUE } from '../../../../../utils/colors';

const styles = StyleSheet.create({
  chatBodyMe: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 20,
    paddingLeft: 20,
    alignSelf: 'flex-end',
    backgroundColor: LIGHT_BLUE, 
    borderWidth: 0.5,
    borderColor: LIGHT_GREY,
    marginRight: 10,
    borderRadius: 15,
    borderWidth: 0.5,
    marginBottom: 5,
  },
  chatBodyHim: {
    paddingRight: 20,
    paddingTop: 10,
    paddingLeft: 20,
    paddingBottom: 10,
    borderWidth: 0.5,
    borderColor: LIGHT_GREY,
    backgroundColor: LIGHTER_GREY,
    alignSelf: 'flex-start',
    borderRadius: 15,
    borderWidth: 0.5,
    borderColor: LIGHT_GREY,
    marginBottom: 5,
    marginLeft: 10,
  },
  body: {
    fontSize: 16,
  },
  sender: {
    color: DARK_BLUE,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 11,
    color: SOFT_BLACK,
    fontStyle: 'italic',
  },
});

export default styles;