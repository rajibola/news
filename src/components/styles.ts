import {StyleSheet} from 'react-native';
import {Colors} from '../constants/colors';
import {hp, wp} from '../utils/responsive-dimensions';

export const FontSizeStyles = StyleSheet.create({
  big: {
    fontSize: hp(30),
    color: Colors.grey03,
  },

  medium: {
    fontSize: hp(16),
    color: Colors.grey03,
  },

  small: {
    fontSize: hp(20),
    color: Colors.grey03,
  },
});

export const ContainerStyles = StyleSheet.create({
  title: {
    color: Colors.grey02,
    fontSize: hp(20),
  },
  header: {
    height: hp(70),
    backgroundColor: Colors.grey04,
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: hp(30),
    borderTopColor: Colors.grey04,
    flexDirection: 'row',
    paddingHorizontal: wp(10),
  },
  container: {
    backgroundColor: Colors.grey02,
    flex: 1,
  },
});
