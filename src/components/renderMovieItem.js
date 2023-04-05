import {View, Text, ImageBackground} from 'react-native';
import React from 'react';
import {appConfig} from '../configs';
import styles from './styles';
import {appStrings} from '../theme/constants';

const renderItem = ({item, index}) => {
  return (
    <View style={styles.itemConatiner} key={index}>
      <ImageBackground
        source={{uri: appConfig.imageBaseUrl + item.backdrop_path}}
        style={styles.itemImage}
        resizeMode={appStrings.cover}>
        <Text style={styles.itemText}>{item.title}</Text>
      </ImageBackground>
    </View>
  );
};

export default renderItem;
