import MasonryList from '@react-native-seoul/masonry-list';
import React, {FC, useEffect, useState} from 'react';
import {Text} from 'react-native';
import {Container, DialogBox} from '../../components';
import {CardComponent} from '../../components/CardComponents';
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
    return <CardComponent navigation={navigation} item={item} />;
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
