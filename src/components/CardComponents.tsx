import React, {FC} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {FontSize, ImageComponent} from '.';
import {CardComponentProps as Props} from '../types/types';
import {CardComponentStyles as styles} from './styles';

export const CardComponent: FC<Props> = ({navigation, item}) => {
  return (
    <TouchableOpacity
      style={styles.newsCard}
      key={item.id}
      onPress={() => navigation.navigate('ViewNews', {item})}>
      <ImageComponent uri={item.media[0].url} type="small" />
      <View style={styles.textContainer}>
        <FontSize text={item.title} type="small" />
      </View>
    </TouchableOpacity>
  );
};
