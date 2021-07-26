import {init, RematchDispatch, RematchRootState} from '@rematch/core';
import news from './news';

const models = {
  news,
};

export const store = init({
  models,
});

export type RootState = RematchRootState<typeof models>;
export type RootDispatch = RematchDispatch<typeof models>;
