import React, {FC} from 'react';
import {View} from 'react-native';
import {Avatar, Button} from 'react-native-elements';
import {FontSize} from '.';
import {Colors} from '../constants';
import {CommentContainerProps as Props} from '../types/types';
import {hp} from '../utils';
import {CommentContainerStyles as styles} from './styles';

export const CommentContainer: FC<Props> = ({
  onPressEdit,
  onPressDelete,
  author,
  comment,
}) => {
  return (
    <View style={styles.container}>
      <Avatar
        size="small"
        rounded
        title={author?.charAt(0)}
        titleStyle={{color: Colors.grey03}}
        containerStyle={styles.avatar}
      />
      <View>
        <FontSize type="x-small" text={comment} style={{fontStyle: 'italic'}} />

        <FontSize
          type="small"
          text={author}
          style={{fontWeight: 'bold', marginTop: hp(3)}}
        />

        <View style={styles.buttonContainer}>
          <Button
            title="Delete"
            type="outline"
            buttonStyle={styles.redButton}
            titleStyle={{color: 'red'}}
            onPress={onPressDelete}
          />

          <Button
            title="Edit"
            type="solid"
            onPress={onPressEdit}
            buttonStyle={styles.solidButton}
          />
        </View>
      </View>
    </View>
  );
};
