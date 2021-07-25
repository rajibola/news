import React from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {Colors} from '../constants';
import {hp, wp} from '../utils';

export const CommentSection = ({onPress}: {onPress: () => void}) => {
  return (
    <View>
      <TextInput
        multiline
        style={{
          // paddingRight: 10,
          height: hp(160),
          paddingHorizontal: wp(10),
          paddingVertical: hp(10),
          borderWidth: 1,
          borderRadius: hp(3),
          marginBottom: hp(10),
          fontSize: hp(14),
          // flex: 2,
          // textAlignVertical: 'top',
        }}
        numberOfLines={10}
        placeholder="Enter your comment"
      />

      <TextInput
        style={{
          height: hp(30),
          borderWidth: 1,
          marginBottom: hp(15),
          paddingHorizontal: wp(10),
        }}
        placeholder="Enter author's name"
      />

      <TouchableOpacity
        onPress={onPress}
        style={{
          height: hp(40),
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: Colors.grey03,
          marginBottom: hp(30),
          borderRadius: hp(3),
        }}>
        <Text
          style={{
            color: Colors.white,
            fontSize: hp(18),
          }}>
          Comment
        </Text>
      </TouchableOpacity>
    </View>
  );
};
