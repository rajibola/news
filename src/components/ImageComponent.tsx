import React, {FC, useState} from 'react';
import {Image} from 'react-native';
import {defaultImage} from '../redux/store/api';
import {ImageComponentProps as Props} from '../types/types';
import {ImageComponentStyles as styles} from './styles';

export const ImageComponent: FC<Props> = ({uri, type}) => {
  const [image, setImage] = useState<string>(uri);
  return (
    <Image
      source={{uri: image}}
      style={[styles.image, styles[type]]}
      onError={() => setImage(defaultImage)}
    />
  );
};
