import {StyleSheet} from 'react-native';
import {globalStyles} from '../../constants';
import {Colors} from '../../constants/colors';
import {hp, wp} from '../../utils/responsive-dimensions';

export const styles = StyleSheet.create({
  textInputAuthor: {
    height: hp(30),
    borderWidth: 1,
    marginBottom: hp(15),
    paddingHorizontal: wp(10),
  },
  scrollView: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  buttonText: {
    color: Colors.white,
    fontSize: hp(18),
  },
  button: {
    height: hp(40),
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.grey03,
    marginBottom: hp(30),
    borderRadius: hp(3),
  },
  textInput: {
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
  },
  commentBox: {},
  summary: {
    fontSize: hp(20),
    lineHeight: hp(26),
    marginVertical: hp(15),
    // color: Colors.white,
  },
  summaryContainer: {
    paddingHorizontal: wp(15),
  },
  line: {
    borderBottomWidth: hp(0.5),
    borderBottomColor: Colors.grey01,
    flexDirection: 'row',
  },

  title: {
    fontSize: hp(30),
    fontWeight: '700',
    color: Colors.grey02,
    backgroundColor: 'rgba(255, 0, 0,0.85)',
  },
  absoluteView: {
    position: 'absolute',
    bottom: hp(10),
    paddingHorizontal: wp(20),
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
