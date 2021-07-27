import React, {FC} from 'react';
import {KeyboardAvoidingView, Modal, Platform, View} from 'react-native';
import {Button, Input} from 'react-native-elements';
import {DialogBoxProps as Props} from '../types/types';
import {DialogBoxStyles as styles} from './styles';

export const DialogBox: FC<Props> = ({
  show,
  onPressCancel,
  onChangeAuthor,
  onChangeContent,
  onPressSubmit,
  onChangeTitle,
  title,
  authorValue,
  summaryValue,
}) => {
  return (
    <Modal transparent={true} visible={show}>
      <View style={styles.container}>
        <View style={styles.boxContainer}>
          <KeyboardAvoidingView
            enabled
            keyboardVerticalOffset={23}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
            <Input
              placeholder="Author"
              onChangeText={onChangeAuthor}
              defaultValue={authorValue}
            />

            {onChangeTitle && (
              <Input
                placeholder="Title"
                multiline
                onChangeText={onChangeTitle}
                defaultValue={title}
              />
            )}
            <Input
              placeholder="Content"
              multiline
              onChangeText={onChangeContent}
              defaultValue={summaryValue}
            />
            <View
              style={{flexDirection: 'row', justifyContent: 'space-around'}}>
              <Button
                title="cancel"
                type="outline"
                raised
                containerStyle={{flex: 1}}
                onPress={onPressCancel}
              />
              <Button
                title="submit"
                type="solid"
                containerStyle={{flex: 1}}
                onPress={onPressSubmit}
              />
            </View>
          </KeyboardAvoidingView>
        </View>
      </View>
    </Modal>
  );
};
