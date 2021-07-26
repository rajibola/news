import {RematchDispatch} from '@rematch/core';
import {ItemProps} from '../../types/types';
import {loadNews} from './api';

export type State = ReadonlyArray<ItemProps>;

const model = {
  state: [] as State,
  reducers: {
    loaded: (state: State, payload: ReadonlyArray<ItemProps>) => payload,
    editNews: (state: State, payload: ItemProps) =>
      state.map(news => {
        if (news.id === payload.id) {
          return {
            ...news,
            author: payload.author,
            summary: payload.summary,
          };
        }

        return news;
      }),
  },

  effects: (dispatch: RematchDispatch) => ({
    async load() {
      const news = await loadNews();
      dispatch.news.loaded(news);
    },
  }),
};

export default model;
