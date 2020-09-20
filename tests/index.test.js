import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Index from '@pages/index';

describe('Home page', () => {
  test('basic render', () => {
    const { container } = render(<Index />);
    expect(container).not.toBeEmptyDOMElement();
  });
});
