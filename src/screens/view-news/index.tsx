import React, {FC, useState} from 'react';
import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {Button} from 'react-native-elements/dist/buttons/Button';
import {CommentSection, Container, DialogBox, FontSize} from '../../components';
import {CommentContainer} from '../../components/CommentContainer';
import {ImageComponent} from '../../components/ImageComponent';
import {useRedux} from '../../hooks/useRedux';
import {CommentProps, ViewNewsProps as Props} from '../../types/types';
import {generateUId, hp} from '../../utils';
import {styles} from './styles';

export const ViewNews: FC<Props> = ({route, navigation}) => {
  const {item} = route.params;
  const [showDialog, setShowDialog] = useState<boolean>(false);
  const [dialogType, setDialogType] = useState<'news' | 'comment'>();
  const [newsAuthor, setNewsAuthor] = useState<string | undefined>('');
  const [summary, setSummary] = useState<string>('');
  const [commentAuthor, setCommentAuthor] = useState<string>('');
  const [comment, setComment] = useState<string>('');
  const [commentId, setCommentId] = useState<string | undefined>('');

  const {news, dispatch} = useRedux();

  const filteredNews = news.find(a => a.id === item.id);

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
    dispatch.addComment({
      newsId: item.id,
      id: generateUId(),
      author: commentAuthor,
      content: comment,
    });
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
        dispatch.editNews({
          ...item,
          summary,
          author: newsAuthor,
        });
        break;

      case 'comment':
        setNewsAuthor('');
        setSummary('');
        dispatch.editComment({
          newsId: item.id,
          id: commentId,
          author: newsAuthor,
          content: summary,
        });
        break;

      default:
        break;
    }

    setShowDialog(false);
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
        <ScrollView style={styles.scrollView}>
          <View style={{position: 'relative', height: hp(300)}}>
            <ImageComponent uri={item.media[0].url} type="big" />
            <Text style={styles.absoluteView}>
              <FontSize
                style={styles.title}
                text={filteredNews?.title}
                type="big"
              />
            </Text>
            <Button
              title="delete"
              containerStyle={styles.deleteButton}
              onPress={onDeleteNews}
            />
          </View>

          <View style={styles.summaryContainer}>
            <View style={styles.line}>
              <FontSize
                text={`author: ${filteredNews?.author}`}
                type="x-small"
              />
              <FontSize
                text={` source: ${filteredNews?.news_source.name}`}
                type="x-small"
              />
            </View>
            <FontSize
              type="medium"
              text={filteredNews?.summary}
              style={styles.summary}
            />

            <FontSize text="Comments" type="medium" style={styles.comment} />
            <FlatList
              data={filteredNews?.comments}
              renderItem={({item: comment}) => (
                <CommentContainer
                  onPressEdit={() => onPressEdit('comment', comment.id)}
                  onPressDelete={() =>
                    onDeleteComment({...comment, newsId: item.id})
                  }
                  comment={comment.content}
                  author={comment.author}
                />
              )}
            />

            <CommentSection
              onPress={onAddComment}
              onChangeAuthor={setCommentAuthor}
              onChangeContent={setComment}
            />
          </View>
        </ScrollView>
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
