import { StyleSheet } from 'react-native';
import { LIGHT_BLUE, LIGHT_GREY, LIGHTER_GREY } from '../../../utils/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  textInput: {
    flex: .9,
    bottom: 0,
    height: 'auto',
  },
  inputContainer: {
    flex:.15, 
    flexDirection: 'row',
    backgroundColor: LIGHT_GREY,
  },
  sendButton: {
    flex: .1,
    alignSelf: 'center',
    paddingLeft: 15 
  },
  chatList: {
    flex: .9,
  },
  backImageContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  backImage: {
    flex: 1,
  }
});

export default styles;