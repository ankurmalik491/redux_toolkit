import {Dimensions, StyleSheet} from 'react-native';
import {appColors} from '../theme/constants';

const styles = StyleSheet.create({
  itemConatiner: {
    backgroundColor: appColors.secondary.grey,
    marginBottom: 4,
  },
  itemImage: {
    height: 200,
    width: Dimensions.get('screen').width,
    justifyContent: 'flex-end',
  },
  itemText: {
    fontSize: 16,
    color: appColors.primary.white,
    padding: 10,
    backgroundColor: appColors.secondary.black_50,
  },
  footerConatiner: {
    marginVertical: 10,
  },
});

export default styles;
