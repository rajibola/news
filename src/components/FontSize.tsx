import React, {FC} from 'react';
import {Text} from 'react-native';
import {FontSizeProps as Props} from '../types/types.d';
import {FontSizeStyles as styles} from './styles';

export const FontSize: FC<Props> = ({type, text, style}) => {
  return <Text style={[styles[type], style]}>{text}</Text>;
};
