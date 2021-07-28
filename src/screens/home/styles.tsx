import {StyleSheet} from 'react-native';
import {Colors} from '../../constants/colors';
import {hp, wp} from '../../utils/responsive-dimensions';

export const styles = StyleSheet.create({
  loading: {
    alignSelf: 'center',
    marginTop: hp(150),
    fontWeight: 'bold',
  },
  masonry: {
    paddingHorizontal: wp(8),
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    paddingTop: hp(12),
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
