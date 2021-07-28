/**
 * @format
 */

import 'react-native';
import {generateNumberId, generateUId, verifyInputs} from '../src/utils';

describe('Test all functions', () => {
  test('if generateUId functions correctly', () => {
    expect(generateUId()).toBeTruthy();
  });

  test('if generateNumberId functions correctly', () => {
    expect(generateNumberId()).toBeTruthy();
  });

  test('if generateUId functions correctly', () => {
    expect(verifyInputs(['riff', 'ridwan'])).toBe(true);
  });

  test('if generateUId functions correctly when passed an empty input', () => {
    expect(verifyInputs(['', 'ridwan'])).toBe(false);
  });
});
