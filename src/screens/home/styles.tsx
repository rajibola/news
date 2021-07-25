import {useMemo} from 'react';
import {StyleSheet} from 'react-native';
import {Colors} from '../../constants/colors';
import {wp, hp} from '../../utils/responsive-dimensions';

export const styles = StyleSheet.create({
  masonry: {
    paddingHorizontal: wp(8),
    alignSelf: 'stretch',
    justifyContent: 'space-between',
  },
  textContainer: {
    paddingHorizontal: wp(10),
    paddingVertical: hp(15),
  },
  image: {
    flex: 1,
  },
  newsCard: {
    // width: wp(100),
    marginBottom: hp(7),
    borderRadius: hp(5),
    backgroundColor: Colors.white,
    overflow: 'hidden',
    marginHorizontal: wp(4),
  },
});
