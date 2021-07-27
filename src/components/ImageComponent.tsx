import React, {useState} from 'react';
import {Image} from 'react-native';
import {defaultImage} from '../redux/store/api';
import {ImageComponentStyles as styles} from './styles';

export const ImageComponent = ({
  uri,
  type,
}: {
  uri: string;
  type: 'big' | 'small';
}) => {
  const [image, setImage] = useState<string>(uri);
  return (
    <Image
      source={{uri: image}}
      style={[styles.image, styles[type]]}
      onError={() => setImage(defaultImage)}
    />
  );
};
