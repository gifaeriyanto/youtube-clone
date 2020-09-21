import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Logo from '..';

describe('Logo', () => {
  test('render successfully', () => {
    const { container, getByTestId } = render(<Logo />);
    expect(container).toContainElement(getByTestId('youtube-logo'));
  });
});
