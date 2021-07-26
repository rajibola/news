import React from 'react';
import {KeyboardAvoidingView, Modal, Platform, View} from 'react-native';
import {Button, Input} from 'react-native-elements';
import {Colors, globalStyles} from '../constants';
import {hp, wp} from '../utils/responsive-dimensions';

export const DialogBox = ({
  show,
  onPressCancel,
  onChangeAuthor,
  onChangeContent,
  onPressSubmit,
  authorValue,
  summaryValue,
}: {
  show: boolean;
  onPressCancel: () => void;
  onChangeAuthor: (text: string) => void;
  onChangeContent: (text: string) => void;
  onPressSubmit: () => void;
  authorValue: string;
  summaryValue: string;
}) => {
  return (
    <Modal transparent={true} visible={show}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          backgroundColor: 'rgba(0,0,0,0.2)',
        }}>
        <View
          style={{
            width: wp(300),
            backgroundColor: Colors.white,
            position: 'absolute',
            alignSelf: 'center',
            borderRadius: hp(5),
            ...globalStyles.shadow,
            paddingHorizontal: wp(20),
            paddingVertical: hp(20),
          }}>
          <KeyboardAvoidingView
            enabled
            keyboardVerticalOffset={23}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
            <Input
              placeholder="Author"
              onChangeText={onChangeAuthor}
              defaultValue={authorValue}
            />

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
