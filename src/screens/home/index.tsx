import MasonryList from '@react-native-seoul/masonry-list';
import React, {FC, useEffect, useState} from 'react';
import {Alert, Text} from 'react-native';
import {CardComponent, Container, DialogBox} from '../../components';
import {useRedux} from '../../hooks/useRedux';
import {newsModel} from '../../redux/store/api';
import {CardProps, HomeProps as Props} from '../../types/types.d';
import {generateNumberId} from '../../utils';
import {styles} from './styles';

export const Home: FC<Props> = ({navigation}) => {
  const [showDialog, setShowDialog] = useState<boolean>(false);
  const [author, setAuthor] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [summary, setSummary] = useState<string>('');

  const {dispatch, news} = useRedux();

  const onSubmit = async () => {
    if (title.trim() && summary.trim() && author.trim()) {
      await dispatch.createNews({
        ...newsModel,
        id: generateNumberId(),
        title: title.trim(),
        summary: summary.trim(),
        author: author.trim(),
      });

      setTitle('');
      setSummary('');
      setAuthor('');
    } else {
      Alert.alert('Please enter valid data');
    }
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
    return <CardComponent navigation={navigation} item={item} key={item.id} />;
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
