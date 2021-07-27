import {StyleSheet} from 'react-native';
import {globalStyles, Colors} from '../constants';
import {hp, wp} from '../utils/responsive-dimensions';

export const CardComponentStyles = StyleSheet.create({
  textContainer: {
    paddingHorizontal: wp(10),
    paddingVertical: hp(15),
  },

  newsCard: {
    marginBottom: hp(7),
    borderRadius: hp(5),
    backgroundColor: Colors.white,
    overflow: 'hidden',
    marginHorizontal: wp(4),
  },
});

export const ImageComponentStyles = StyleSheet.create({
  small: {
    height: hp(180),
  },
  big: {
    height: hp(200),
  },
  image: {
    flex: 1,
    height: hp(180),
  },
});

export const DialogBoxStyles = StyleSheet.create({
  buttonContainer: {flexDirection: 'row', justifyContent: 'space-around'},
  boxContainer: {
    width: wp(300),
    backgroundColor: Colors.white,
    position: 'absolute',
    alignSelf: 'center',
    borderRadius: hp(5),
    ...globalStyles.shadow,
    paddingHorizontal: wp(20),
    paddingVertical: hp(20),
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
});

export const CommentSectionStyles = StyleSheet.create({
  buttonText: {
    color: Colors.white,
    fontSize: hp(18),
  },
  buttonContainer: {
    height: hp(40),
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.grey03,
    marginBottom: hp(30),
    borderRadius: hp(3),
  },
  authorInput: {
    height: hp(30),
    borderWidth: 1,
    marginBottom: hp(15),
    paddingHorizontal: wp(10),
  },
  multilineInput: {
    height: hp(100),
    paddingHorizontal: wp(10),
    paddingVertical: hp(10),
    borderWidth: 1,
    borderRadius: hp(3),
    marginBottom: hp(10),
    fontSize: hp(14),
  },
});

export const CommentContainerStyles = StyleSheet.create({
  avatar: {backgroundColor: Colors.grey02, marginRight: wp(10)},
  solidButton: {
    backgroundColor: 'rgb(45, 45, 211)',
    borderColor: 'red',
    width: wp(80),
    height: hp(30),
    padding: 0,
  },
  redButton: {
    borderColor: 'red',
    width: wp(80),
    height: hp(30),
    padding: 0,
    marginRight: wp(10),
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp(10),
  },
  container: {
    flexDirection: 'row',
    paddingHorizontal: wp(15),
    marginRight: wp(20),
    marginBottom: hp(10),
  },
});

export const FontSizeStyles = StyleSheet.create({
  dark: {
    color: Colors.grey01,
  },
  light: {
    color: Colors.white,
  },
  big: {
    fontSize: hp(30),
    color: Colors.grey03,
  },

  medium: {
    fontSize: hp(20),
    lineHeight: hp(28),
    color: Colors.grey03,
  },

  small: {
    fontSize: hp(16),
    lineHeight: hp(20),
    color: Colors.grey03,
  },

  'x-small': {
    fontSize: hp(12),
    lineHeight: hp(14),
    color: Colors.grey03,
  },
});

export const ContainerStyles = StyleSheet.create({
  rightText: {
    backgroundColor: Colors.white,
    color: Colors.grey02,
  },
  sideTitle: {
    fontSize: hp(20),
    lineHeight: hp(28),
    width: wp(80),
    textAlign: 'center',
    height: hp(30),
    borderRadius: wp(4),
    justifyContent: 'center',
    alignItems: 'center',
    color: Colors.grey04,
  },
  title: {
    color: Colors.grey02,
    fontWeight: 'bold',
    // fontSize: hp(20),
  },
  header: {
    height: hp(70),
    backgroundColor: Colors.grey04,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: hp(30),
    borderTopColor: Colors.grey04,
    flexDirection: 'row',
    paddingHorizontal: wp(15),
  },
  container: {
    backgroundColor: Colors.grey02,
    flex: 1,
  },
});
