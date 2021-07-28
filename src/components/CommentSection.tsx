import React, {FC} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {CommentSectionProps as Props} from '../types/types';
import {CommentSectionStyles as styles} from './styles';

export const CommentSection: FC<Props> = ({
  onPress,
  onChangeAuthor,
  onChangeContent,
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.multilineInput}
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
