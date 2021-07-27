import {ItemProps} from '../../types/types';
import {apiService} from '../../utils';

type UserResponse = {
  data: ReadonlyArray<ItemProps>;
};

export const loadNews = async () => {
  const result = await apiService('/articles?page=1&size=50', 'get');
  const data = (await result) as UserResponse;
  return data.data.map(news => ({
    ...news,
    comments: [],
  })) as ReadonlyArray<ItemProps>;
};
