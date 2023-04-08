import {Dimensions, StyleSheet} from 'react-native';
import { appColors } from '../../theme/constants';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: appColors.primary.grey,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorText: {
    fontSize: 18,
    color: appColors.primary.black,
  },
  button: {
    backgroundColor: appColors.primary.blue,
    marginVertical: 20,
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    color: appColors.primary.white,
  },
});

export default styles;
