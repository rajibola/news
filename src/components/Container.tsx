import React from 'react';
import {StatusBar, Text, View} from 'react-native';
import {ContainerProps} from '../types/types.d';
import {ContainerStyles as styles} from './styles';
import {Icon} from 'react-native-elements';

export const Container = ({title, onPressBack, children}: ContainerProps) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.header}>
        <Text onPress={onPressBack}>Back</Text>
        <Text style={styles.title}>{title}</Text>
        <Text>h</Text>
      </View>

      {children}
    </View>
  );
};
