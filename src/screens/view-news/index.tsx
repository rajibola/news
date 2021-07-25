import React, {FC} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  Platform,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import {Container, FontSize} from '../../components';
import {hp} from '../../utils/responsive-dimensions';
import {styles} from './styles';

export const ViewNews: FC<any> = ({route, navigation}) => {
  const {item} = route.params;
  return (
    <Container title="VIEW NEWS" onPressBack={navigation.goBack}>
      <KeyboardAvoidingView
        enabled
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={{flexGrow: 1}}>
        <ScrollView style={styles.scrollView}>
          <View style={{position: 'relative', height: hp(300)}}>
            <Image source={{uri: item.media[0].url}} style={styles.image} />
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
    </Container>
  );
};

export const CommentSection = ({onPress}: {onPress: () => void}) => {
  return (
    <View style={styles.commentBox}>
      <TextInput
        multiline
        style={styles.textInput}
        numberOfLines={10}
        placeholder="Enter your comment"
      />

      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={styles.buttonText}>Comment</Text>
      </TouchableOpacity>
    </View>
  );
};
