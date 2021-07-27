import React, {FC} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {CommentSectionProps} from '../types/types';
import {CommentSectionStyles as styles} from './styles';

export const CommentSection: FC<CommentSectionProps> = ({
  onPress,
  onChangeAuthor,
  onChangeContent,
}) => {
  return (
    <View>
      <TextInput
        multiline
        style={styles.multilineInput}
        numberOfLines={10}
        placeholder="Enter your comment"
        onChangeText={onChangeContent}
      />

      <TextInput
        style={styles.authorInput}
        placeholder="Enter author's name"
        onChangeText={onChangeAuthor}
      />

      <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Comment</Text>
      </TouchableOpacity>
    </View>
  );
};
