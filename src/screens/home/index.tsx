import MasonryList from '@react-native-seoul/masonry-list';
import React, {FC, useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Container, DialogBox, FontSize} from '../../components';
import {ImageComponent} from '../../components/ImageComponent';
import {RootDispatch, RootState} from '../../redux/store';
import {newsModel} from '../../redux/store/api';
import {CardProps, HomeProps as Props} from '../../types/types.d';
import {generateNumberId} from '../../utils';
import {styles} from './styles';

export const Home: FC<Props> = ({navigation}) => {
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
    return (
      <TouchableOpacity
        style={styles.newsCard}
        key={item.id}
        onPress={() => navigation.navigate('ViewNews', {item})}>
        <ImageComponent uri={item.media[0].url} type="small" />
        <View style={styles.textContainer}>
          <FontSize text={item.title} type="small" />
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
