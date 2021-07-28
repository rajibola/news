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

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

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

    const {findByText, findByPlaceholderText} = render(component);

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

    const {findByText, findByPlaceholderText} = render(component);

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

    const {findByText, findByPlaceholderText, getByText} = render(component);

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
