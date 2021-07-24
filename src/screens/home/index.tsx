import MasonryList from '@react-native-seoul/masonry-list';
import React, {FC, useEffect, useMemo, useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {Container} from '../../components';
import {CardProps} from '../../types/types.d';
import apiService from '../../utils/apiHandler';
import {hp, wp} from '../../utils/responsive-dimensions';
import {styles} from './styles';

export const Home: FC = () => {
  const [data, setData] = useState<any>(null);
  useEffect(() => {
    apiService('/articles?page=1&size=50', 'get')
      .then(res => {
        console.log('RESPO', res);
        setData(res);
      })
      .catch(err => console.log('ERROR', err));
  }, []);

  const _renderItem = ({item, index}: CardProps | any) => {
    const randomBool = useMemo(() => Math.random() < 0.5, []);
    return (
      <TouchableOpacity style={styles.newsCard} key={item.id}>
        <Image
          source={{uri: item.media[0].url}}
          style={[styles.image, {height: randomBool ? hp(180) : hp(110)}]}
        />
        <View style={styles.textContainer}>
          <Text>{item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <Container title="NEWS">
      {!data ? (
        <Text>News is loading ...</Text>
      ) : (
        <MasonryList
          contentContainerStyle={styles.masonry}
          data={data.data}
          numColumns={2}
          renderItem={_renderItem}
        />
      )}
    </Container>
  );
};
