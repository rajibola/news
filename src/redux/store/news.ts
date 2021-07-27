import {RematchDispatch} from '@rematch/core';
import {CommentProps, ItemProps} from '../../types/types';
import {loadNews} from './api';

export type State = ReadonlyArray<ItemProps>;

const model = {
  state: [] as State,
  reducers: {
    loaded: (state: State, payload: ReadonlyArray<ItemProps>) => payload,

    deleteNews: (state: State, payload: ItemProps) =>
      state.filter(news => news.id !== payload.id),

    deleteComment: (state: State, payload: CommentProps) =>
      state.map(news => {
        if (news.id === payload.newsId) {
          let commentsCopy = news.comments.slice();
          let result = commentsCopy.filter(
            comment => comment.id !== payload.id,
          );
          return {
            ...news,
            comments: result,
          };
        }
        return news;
      }),

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

    createNews: (state: State, payload: ItemProps) => [payload, ...state],

    addComment: (state: State, payload: CommentProps) =>
      state.map(news => {
        if (news.id === payload.newsId) {
          return {
            ...news,
            comments: [
              ...news.comments,
              {
                id: payload.id,
                author: payload.author,
                content: payload.content,
              },
            ],
          };
        }
        return news;
      }),

    editComment: (state: State, payload: CommentProps) =>
      state.map(news => {
        if (news.id === payload.newsId) {
          let index = news.comments.findIndex(item => item.id === payload.id);
          let commentsCopy = news.comments.slice();
          commentsCopy[index].author = payload.author;
          commentsCopy[index].content = payload.content;
          return {
            ...news,
            comments: commentsCopy,
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
