import {useDispatch, useSelector} from 'react-redux';
import {RootDispatch, RootState} from '../redux/store';

export const useRedux = () => {
  const news = useSelector((state: RootState) => state.news);
  const dispatch = useDispatch<RootDispatch>().news;

  return {news, dispatch};
};
