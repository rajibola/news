import React, {FC} from 'react';
import {StatusBar, Text, TouchableOpacity, View} from 'react-native';
import {ContainerProps as Props} from '../types/types.d';
import {FontSize} from './FontSize';
import {ContainerStyles as styles} from './styles';

export const Container: FC<Props> = ({
  title,
  onPressBack,
  children,
  onPressRight,
  rightText,
}) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.header}>
        <TouchableOpacity onPress={onPressBack} style={styles.sideTitle}>
          <FontSize text={onPressBack && 'Back'} type="small" color="light" />
        </TouchableOpacity>

        <FontSize style={styles.title} text={title} type="medium" />

        <TouchableOpacity
          onPress={onPressRight}
          style={[styles.sideTitle, styles.rightText]}>
          <FontSize text={onPressRight && rightText} type="medium" />
        </TouchableOpacity>
      </View>

      {children}
    </View>
  );
};
