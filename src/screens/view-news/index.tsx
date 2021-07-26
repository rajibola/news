import React, {FC, useState} from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {CommentSection, Container, FontSize, DialogBox} from '../../components';
import {ViewNewsProps} from '../../types/types';
import {verifyImageFormat, hp} from '../../utils';
import {styles} from './styles';

export const ViewNews: FC<ViewNewsProps> = ({route, navigation}) => {
  const {item} = route.params;
  const [showDialog, setShowDialog] = useState<boolean>(false);
  const [newsAuthor, setNewsAuthor] = useState<string>(item.author);
  const [summary, setSummary] = useState<string>(item.summary);

  const editNews = () => {
    setShowDialog(true);
  };

  const cancel = () => {
    setShowDialog(false);
  };

  return (
    <Container
      title="VIEW NEWS"
      onPressBack={navigation.goBack}
      rightText="Edit"
      onPressRight={editNews}>
      <KeyboardAvoidingView
        enabled
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={{flexGrow: 1}}>
        <ScrollView style={styles.scrollView}>
          <View style={{position: 'relative', height: hp(300)}}>
            <Image
              source={{
                uri: verifyImageFormat(item.media[0].url),
              }}
              style={styles.image}
            />
            <Text style={styles.absoluteView}>
              <Text style={styles.title}>{item.title}</Text>
            </Text>
          </View>

          <View style={styles.summaryContainer}>
            <View style={styles.line}>
              <Text>author: {item.author}</Text>
              <Text>source: {item.news_source.name}</Text>
            </View>
            <FontSize
              type="medium"
              text={item.summary}
              style={styles.summary}
            />
            <CommentSection onPress={() => null} />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>

      <DialogBox
        show={showDialog}
        onPressCancel={cancel}
        onChangeAuthor={setNewsAuthor}
        onChangeContent={setSummary}
        authorValue={newsAuthor}
        summaryValue={summary}
      />
    </Container>
  );
};
