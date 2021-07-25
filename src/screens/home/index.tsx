import MasonryList from '@react-native-seoul/masonry-list';
import React, {FC, useEffect, useMemo, useState} from 'react';
import {ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import {Container, DialogBox} from '../../components';
import {CardProps, HomeProps, ItemProps} from '../../types/types.d';
import {hp, apiService, verifyImageFormat} from '../../utils';
import {styles} from './styles';

export const Home: FC<HomeProps> = ({navigation}) => {
  const [data, setData] = useState<ItemProps | any>();
  const [showDialog, setShowDialog] = useState<boolean>(false);
  const [newsAuthor, setNewsAuthor] = useState<string>('');
  const [summary, setSummary] = useState<string>('');

  const onClickCreate = () => {
    setShowDialog(true);
  };

  const onClickCancel = () => {
    setShowDialog(false);
  };

  useEffect(() => {
    apiService('/articles?page=1&size=50', 'get')
      .then((res: unknown) => {
        setData(res);
      })
      .catch(err => console.log('ERROR', err));
  }, []);

  const _renderItem = ({item}: CardProps | any) => {
    const randomBool = useMemo(() => Math.random() < 0.5, []);
    console.log('Image', item);
    return (
      <TouchableOpacity
        style={styles.newsCard}
        key={item.id}
        onPress={() => navigation.navigate('ViewNews', {item})}>
        <ImageBackground
          source={{uri: verifyImageFormat(item.media[0].url)}}
          style={[styles.image, {height: randomBool ? hp(180) : hp(110)}]}
        />
        <View style={styles.textContainer}>
          <Text>{item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <Container title="NEWS" rightText="Create" onPressRight={onClickCreate}>
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

      <DialogBox
        show={showDialog}
        onPressCancel={onClickCancel}
        onChangeAuthor={setNewsAuthor}
        onChangeContent={setSummary}
        authorValue={newsAuthor}
        summaryValue={summary}
      />
    </Container>
  );
};
