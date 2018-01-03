import { StyleSheet } from 'react-native';
import { GREY } from '../../../../utils/colors';
import { Platform } from 'react-native'

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row'
  },
  headerAvatar: {
    width: 40,
    height: 40,
    marginRight: 10,
    borderRadius: 50,
    borderWidth: 0.5,
    borderColor: GREY,
    alignSelf: 'center'
  },
  headerTitle: {
    fontSize: Platform.OS === 'ios' ? 17 : 18,
    fontWeight: Platform.OS === 'ios' ? '600' : '500',
    color: 'rgba(0, 0, 0, .9)',
    textAlign: Platform.OS === 'ios' ? 'center' : 'left',
    marginHorizontal: 16,
    alignSelf: 'center'
  },
});

export default styles;