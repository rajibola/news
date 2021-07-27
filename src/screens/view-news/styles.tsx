import {StyleSheet} from 'react-native';
import {globalStyles} from '../../constants';
import {Colors} from '../../constants/colors';
import {hp, wp} from '../../utils/responsive-dimensions';

export const styles = StyleSheet.create({
  comment: {borderBottomWidth: 1, marginBottom: hp(10)},
  deleteButton: {
    position: 'absolute',
    alignSelf: 'flex-end',
    backgroundColor: 'red',
    top: hp(15),
    right: wp(15),
  },
  scrollView: {
    flex: 1,
    backgroundColor: Colors.white,
  },

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
    justifyContent: 'space-between',
    paddingVertical: hp(3),
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
