import { StyleSheet } from 'react-native';
import { LIGHT_GREY, SOFT_BLACK} from '../../../../../utils/colors';

const styles = StyleSheet.create({
  groupContainer: {
    flex: 1,
    flexDirection: 'row',
    height: 40,
    paddingRight: 10,
    paddingLeft: 10,
    paddingBottom: 5,
    marginBottom: 5,
    borderBottomColor: LIGHT_GREY,
    borderBottomWidth: 1,
  },
  groupDataContainer: {
    flex: 4,
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  groupName: {
    fontWeight: 'bold',
    marginBottom: 5,
    color: SOFT_BLACK,
  },
  groupLastMessage: {
    color: LIGHT_GREY,
    marginBottom: 5,
  },
});

export default styles;