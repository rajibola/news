import React, {FC, useState} from 'react';
import {
  Alert,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  Text,
  View,
} from 'react-native';
import {Button} from 'react-native-elements';
import {
  CommentContainer,
  CommentSection,
  Container,
  DialogBox,
  FontSize,
  ImageComponent,
} from '../../components';
import {useRedux} from '../../hooks/useRedux';
import {
  CommentProps,
  RenderItemProps,
  ViewNewsProps as Props,
} from '../../types/types';
import {generateUId, verifyInputs} from '../../utils';
import {styles} from './styles';

export const ViewNews: FC<Props> = ({route, navigation}) => {
  const {item} = route.params;
  const [showDialog, setShowDialog] = useState<boolean>(false);
  const [dialogType, setDialogType] = useState<'news' | 'comment'>();
  const [newsAuthor, setNewsAuthor] = useState<string>('');
  const [summary, setSummary] = useState<string>('');
  const [commentAuthor, setCommentAuthor] = useState<string>('');
  const [comment, setComment] = useState<string>('');
  const [commentId, setCommentId] = useState<string | undefined>('');

  const {news, dispatch, filteredResult} = useRedux(item.id);

  const onPressEdit = (type: 'news' | 'comment', commentId?: string) => {
    setDialogType(type);
    if (type === 'comment') {
      setCommentId(commentId);
      setSummary('');
      setNewsAuthor('');
    }
    setShowDialog(true);
  };

  const onAddComment = () => {
    if (verifyInputs([commentAuthor, comment])) {
      dispatch.addComment({
        newsId: item.id,
        id: generateUId(),
        author: commentAuthor.trim(),
        content: comment.trim(),
      });
    } else {
      Alert.alert('Please enter valid data');
    }
  };

  const onDeleteNews = async () => {
    await dispatch.deleteNews({...item});
    navigation.goBack();
  };

  const onDeleteComment = (comment: CommentProps) => {
    dispatch.deleteComment({...comment});
  };

  const cancel = () => {
    setShowDialog(false);
  };

  const onSubmit = () => {
    switch (dialogType) {
      case 'news':
        if (verifyInputs([summary, newsAuthor])) {
          dispatch.editNews({
            ...item,
            summary: summary.trim(),
            author: newsAuthor.trim(),
          });
        } else {
          Alert.alert('Please enter valid data');
        }

        break;

      case 'comment':
        if (verifyInputs([summary, newsAuthor])) {
          dispatch.editComment({
            newsId: item.id,
            id: commentId,
            author: newsAuthor.trim(),
            content: summary.trim(),
          });
        } else {
          Alert.alert('Please enter valid data');
        }
        break;

      default:
        break;
    }
    setNewsAuthor('');
    setSummary('');
    setShowDialog(false);
  };

  const _renderItem = ({item: comment}: RenderItemProps) => (
    <CommentContainer
      onPressEdit={() => onPressEdit('comment', comment.id)}
      onPressDelete={() => onDeleteComment({...comment, newsId: item.id})}
      comment={comment.content}
      author={comment.author}
    />
  );

  const header = () => {
    return (
      <>
        <View style={styles.imageContainer}>
          <ImageComponent uri={item?.media[0]?.url} type="big" />
          <Text style={styles.absoluteView}>
            <FontSize
              style={styles.title}
              text={filteredResult?.title}
              type="big"
            />
          </Text>
          <Button
            title="delete"
            containerStyle={styles.deleteButton}
            onPress={onDeleteNews}
          />
        </View>
        <View style={styles.line}>
          <FontSize text={`author: ${filteredResult?.author}`} type="x-small" />
          <FontSize
            text={` source: ${filteredResult?.news_source.name}`}
            type="x-small"
          />
        </View>
        <FontSize
          type="medium"
          text={filteredResult?.summary}
          style={styles.summary}
        />

        <FontSize text="Comments" type="medium" style={styles.comment} />
      </>
    );
  };

  const footer = () => {
    return (
      <CommentSection
        onPress={onAddComment}
        onChangeAuthor={setCommentAuthor}
        onChangeContent={setComment}
      />
    );
  };

  return (
    <Container
      title="VIEW NEWS"
      onPressBack={navigation.goBack}
      rightText="Edit"
      onPressRight={() => onPressEdit('news')}>
      <KeyboardAvoidingView
        enabled
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={{flexGrow: 1}}>
        <FlatList
          ListHeaderComponent={header()}
          data={filteredResult?.comments}
          renderItem={_renderItem}
          ListFooterComponent={footer()}
        />
      </KeyboardAvoidingView>

      <DialogBox
        show={showDialog}
        onPressCancel={cancel}
        onChangeAuthor={setNewsAuthor}
        onChangeContent={setSummary}
        onPressSubmit={onSubmit}
        authorValue={newsAuthor}
        summaryValue={summary}
      />
    </Container>
  );
};
