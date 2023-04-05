import {View, ActivityIndicator} from 'react-native';
import React from 'react';
import styles from './styles';
import { appColors, appStrings } from '../theme/constants';

const renderFooter = () => {
  return (
    <View style={styles.footerConatiner}>
      <ActivityIndicator size={appStrings.large} color={appColors.primary.black} />
    </View>
  );
};

export default renderFooter;
