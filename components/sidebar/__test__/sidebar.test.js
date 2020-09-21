import '@testing-library/jest-dom/extend-expect';
import { findByTestId, fireEvent } from '@testing-library/react';
import React from 'react';
import Sidebar from '..';

describe('Sidebar', () => {
  test('render successfully', async () => {
    const mockFunc = jest.fn();
    const { container } = renderWithTheme(
      <Sidebar minimized={false} onMinimized={mockFunc} />,
    );
    const component = await findByTestId(container, 'sidebar');
    expect(component).not.toBeEmptyDOMElement();
  });

  test('render sidebar minimized version successfully', async () => {
    const mockFunc = jest.fn();
    const { container } = renderWithTheme(
      <Sidebar minimized={true} onMinimized={mockFunc} />,
    );
    const component = await findByTestId(container, 'sidebar-minimized');
    expect(component).not.toBeEmptyDOMElement();
  });
});
