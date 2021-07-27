import React, {FC} from 'react';
import {View} from 'react-native';
import {Avatar, Button} from 'react-native-elements';
import {FontSize} from '.';
import {Colors} from '../constants';
import {hp, wp} from '../utils';
import {CommentContainerStyles as styles} from './styles';

export type CommentContainerProps = {
  onPressEdit?: () => void;
  author?: string;
  comment?: string;
};

export const CommentContainer: FC<CommentContainerProps> = ({
  onPressEdit,
  author,
  comment,
}) => {
  return (
    <View style={styles.container}>
      <Avatar
        size="small"
        rounded
        title="M"
        titleStyle={{color: Colors.grey03}}
        containerStyle={{backgroundColor: Colors.grey02, marginRight: wp(10)}}
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
