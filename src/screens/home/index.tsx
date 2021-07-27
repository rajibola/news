import MasonryList from '@react-native-seoul/masonry-list';
import React, {FC, useEffect, useState} from 'react';
import {ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Container, DialogBox} from '../../components';
import {RootDispatch, RootState} from '../../redux/store';
import {newsModel} from '../../redux/store/api';
import {CardProps, HomeProps} from '../../types/types.d';
import {generateNumberId, hp, verifyImageFormat} from '../../utils';
import {styles} from './styles';

export const Home: FC<HomeProps> = ({navigation}) => {
  const [showDialog, setShowDialog] = useState<boolean>(false);
  const [author, setAuthor] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [summary, setSummary] = useState<string>('');

  const news = useSelector((state: RootState) => state.news);

  const dispatch = useDispatch<RootDispatch>().news;

  const onSubmit = () => {
    dispatch.createNews({
      ...newsModel,
      id: generateNumberId(),
      title,
      summary,
      author,
    });
  };

  const onClickCreate = () => {
    setShowDialog(true);
  };

  const onClickCancel = () => {
    setShowDialog(false);
  };

  useEffect(() => {
    dispatch.load();
  }, []);

  const _renderItem = ({item}: CardProps) => {
    // const randomBool = () => Math.random() < 0.5,;
    return (
      <TouchableOpacity
        style={styles.newsCard}
        key={item.id}
        onPress={() => navigation.navigate('ViewNews', {item})}>
        <ImageBackground
          source={{uri: verifyImageFormat(item.media[0].url)}}
          style={[styles.image, {height: hp(180)}]}
        />
        <View style={styles.textContainer}>
          <Text>{item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <Container title="NEWS" rightText="Create" onPressRight={onClickCreate}>
      {!news.length ? (
        <Text>News is loading ...</Text>
      ) : (
        <MasonryList
          contentContainerStyle={styles.masonry}
          data={news.slice()}
          numColumns={2}
          renderItem={_renderItem}
          bounces={false}
        />
      )}

      <DialogBox
        show={showDialog}
        onPressCancel={onClickCancel}
        onChangeAuthor={setAuthor}
        onChangeContent={setSummary}
        onPressSubmit={onSubmit}
        onChangeTitle={setTitle}
        title={title}
        authorValue={author}
        summaryValue={summary}
      />
    </Container>
  );
};
