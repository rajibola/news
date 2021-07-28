/**
 * @format
 */

import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import {create} from 'react-test-renderer';
import {
  CardComponent,
  CommentContainer,
  CommentSection,
  DialogBox,
} from '../src/components';
import {newsModel} from '../src/redux/store/api';

describe('test all components', () => {
  const item = {author: 'Ridwan', summary: 'Hello from the other side'};
  const card = create(<CardComponent item={newsModel} />);
  const comment = create(
    <CommentContainer author="ridwan" comment="Hello there" />,
  );
  const commentSection = create(<CommentSection />);

  const dialogBox = create(
    <DialogBox
      title="The New Trend"
      authorValue={item.author}
      summaryValue={item.summary}
      show={true}
    />,
  );

  test('test if card component renders correctly', () => {
    expect(card).toMatchSnapshot();
  });

  test('test if comment container component renders correctly', () => {
    expect(comment).toMatchSnapshot();
  });

  test('test if comment section component renders correctly', () => {
    expect(commentSection).toMatchSnapshot();
  });

  test('test if dialog box component renders correctly', () => {
    expect(dialogBox).toMatchSnapshot();
  });
});
