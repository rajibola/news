/**
 * @format
 */

import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import {fireEvent, render, waitFor} from '@testing-library/react-native';
import {MainNavigator} from '../src/navigation';
import {Provider} from 'react-redux';
import {store} from '../src/redux/store';
import * as allFile from '../src/redux/store/api';
import {ItemProps} from '../src/types/types';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

const data: ReadonlyArray<ItemProps> = [
  {
    id: 63327,
    title: 'CHRISTMAS AND COVID: HOLIDAY PREDICTION FOR 2020',
    author: 'Akpevwe Abenabe',
    summary:
      'Phew! It has been an unexpected year. With the outbreak of the novel coronavirus, it certainly feels like the world is taking one step forward and two steps backwards. While for some, it may feel too early to put up the Christmas tree, we can all agree that the holiday season has undoubtedly been on our minds.',
    content:
      '<p><span style="color: rgb(41, 41, 41);">Phew! It has been an unexpected year. With the outbreak of the novel coronavirus, it certainly feels like the world is taking one step forward and two steps backwards. While for some, it may feel too early to put up the Christmas tree, we can all agree that the holiday season has undoubtedly been on our minds.</span></p>',
    news_source_id: 30182,
    aggregator: null,
    url: 'https://akpevwe-abenabe.medium.com/christmas-and-covid-holiday-prediction-for-2020-940c4796bbb0',
    status_id: 5,
    published_date: '2020-11-22 13:01:44',
    created_at: '2020-11-22 13:04:57',
    updated_at: '2020-11-22 13:04:57',
    additional_data: {
      banner: {
        title: '',
        url: 'https://akpevwe-abenabe.medium.com/christmas-and-covid-holiday-prediction-for-2020-940c4796bbb0',
      },
      image: {
        description: '',
      },
    },
    media: [
      {
        id: 24071,
        url: 'https://images.pexels.com/photos/3944454/pexels-photo-3944454.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        media_type: {
          id: 1,
          type: 'image',
        },
      },
    ],
    tags: [
      {
        id: 2,
        name: 'topfeeds',
        description: 'Perferendis non omnis suscipit.',
        hidden: false,
      },
    ],
    categories: [
      {
        id: 10,
        name: 'Clane Features ',
        parent_category: null,
        default: true,
        status_id: 1,
        url: 'https://res.cloudinary.com/clane-company-ltd/image/upload/v1562765320/clane-originals_illustration.png',
        rank: 8,
      },
    ],
    news_source: {
      id: 30182,
      name: 'Medium.com ',
      logo_url: '',
    },
    comments: [],
  },
];

const mockLoadNews = jest.spyOn(allFile, 'loadNews');
mockLoadNews.mockResolvedValue(data);

describe('Testing Home screen', () => {
  test('page contains the `Create` button', async () => {
    const component = (
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    );

    const {findByText} = render(component);

    const button = await findByText('Create');

    expect(button).toBeTruthy();
  });

  test('testing the `Create` button', async () => {
    const component = (
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    );

    const {findByText, findByPlaceholderText} = await render(component);

    const button = await findByText('Create');
    fireEvent(button, 'press');

    const dialogBox = await findByPlaceholderText('Author');

    expect(button).toBeTruthy();
    expect(dialogBox).toBeTruthy();
  });
});

describe('Creating a news', () => {
  test('page contains the correct input fields', async () => {
    const component = (
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    );

    const {findByText, findByPlaceholderText} = await render(component);

    const button = await findByText('Create');
    fireEvent(button, 'press');

    const author = await findByPlaceholderText('Author');
    const title = await findByPlaceholderText('Title');
    const content = await findByPlaceholderText('Content');

    expect(button).toBeTruthy();
    expect(author).toBeTruthy();
    expect(title).toBeTruthy();
    expect(content).toBeTruthy();
  });

  test('created a news', async () => {
    const component = (
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    );

    const {findByText, findByPlaceholderText, getByText} = await render(
      component,
    );

    const button = await findByText('Create');
    fireEvent(button, 'press');

    const author = await findByPlaceholderText('Author');
    const title = await findByPlaceholderText('Title');
    const content = await findByPlaceholderText('Content');

    fireEvent.changeText(author, 'Ridwan Ajibola');
    fireEvent.changeText(title, 'A news created by Ajibola');
    fireEvent.changeText(
      content,
      'The news was created and saved in redux staore',
    );
    fireEvent.press(getByText('submit'));

    const cardTitle = await findByText('A news created by Ajibola');

    expect(cardTitle).toBeTruthy();
  });
});
