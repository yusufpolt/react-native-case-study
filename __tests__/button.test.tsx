/**
 * @format
 */

import 'react-native';

import {describe, expect, test, jest} from '@jest/globals';
import {fireEvent, render} from '@testing-library/react-native';
import React from 'react';
import Button from '../src/components/lib/button';
import {Text} from 'react-native';

describe('<Button/>', () => {
  test('renders correctly with children', () => {
    const {getByText} = render(
      <Button>
        <Text>Press me</Text>
      </Button>,
    );
    const buttonElement = getByText('Press me');
    expect(buttonElement).toBeDefined();
  });

  test('renders ActivityIndicator when loading is true', () => {
    const {queryByText, queryByTestId} = render(
      <Button loading={true}>
        <Text>Press me</Text>
      </Button>,
    );
    const buttonElement = queryByText('Press me');
    const activityIndicatorElement = queryByTestId('activity-indicator');
    expect(buttonElement).toBeNull();
    expect(activityIndicatorElement).toBeDefined();
  });

  test('button is disabled when loading is true', () => {
    const onPressMock = jest.fn();
    const {getByTestId} = render(
      <Button testID="button" loading={true} onPress={onPressMock} />,
    );
    const buttonElement = getByTestId('button');
    fireEvent.press(buttonElement);
    expect(onPressMock).not.toHaveBeenCalled();
  });
});
