import React, {FC} from 'react';
import {StatusBar, Text, View} from 'react-native';
import {ContainerProps as Props} from '../types/types.d';
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
        <Text onPress={onPressBack} style={styles.title}>
          Back
        </Text>

        <Text style={styles.title}>{title}</Text>

        <Text onPress={onPressRight} style={styles.title}>
          {rightText}
        </Text>
      </View>

      {children}
    </View>
  );
};
