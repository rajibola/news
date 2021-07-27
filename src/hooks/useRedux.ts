import {useDispatch, useSelector} from 'react-redux';
import {RootDispatch, RootState} from '../redux/store';

export const useRedux = (singleNewsId?: number) => {
  const news = useSelector((state: RootState) => state.news);
  const dispatch = useDispatch<RootDispatch>().news;
  const filteredResult = news.find(a => a.id === singleNewsId);

  return {news, dispatch, filteredResult};
};
