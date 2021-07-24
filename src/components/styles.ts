import {StyleSheet} from 'react-native';
import {Colors} from '../constants/colors';
import {hp} from '../utils/responsive-dimensions';

export const ContainerStyles = StyleSheet.create({
  title: {
    color: Colors.grey02,
    fontSize: hp(20),
  },
  header: {
    marginBottom: hp(20),
    height: hp(70),
    backgroundColor: Colors.grey04,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: hp(30),
    borderTopColor: Colors.grey04,
  },
  container: {
    backgroundColor: Colors.grey02,
    flex: 1,
  },
});
