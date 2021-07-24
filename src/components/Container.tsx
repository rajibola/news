import React from 'react';
import {StatusBar, Text, View} from 'react-native';
import {ContainerProps} from '../types/types.d';
import {ContainerStyles as styles} from './styles';

export const Container = ({title, children}: ContainerProps) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
      </View>
      {children}
    </View>
  );
};
