import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';
import Navbar from '..';

describe('Navbar', () => {
  test('render successfully', () => {
    const mockFunc = jest.fn();
    const { container } = renderWithTheme(
      <Navbar minimized={true} onMinimized={mockFunc} />,
    );
    expect(container).not.toBeEmptyDOMElement();
  });

  test('onMinimized called after click the toggle', () => {
    const mockFunc = jest.fn();
    const { getByTestId } = renderWithTheme(
      <Navbar minimized={false} onMinimized={mockFunc} />,
    );
    fireEvent.click(getByTestId('navbar-minimized-toggle'));
    expect(mockFunc).toHaveBeenCalled();
  });

  test('onMinimized return true', () => {
    let minimized = false;
    const handleMinimized = (value) => {
      minimized = value;
    };
    const { getByTestId } = renderWithTheme(
      <Navbar minimized={minimized} onMinimized={handleMinimized} />,
    );
    fireEvent.click(getByTestId('navbar-minimized-toggle'));
    expect(minimized).toEqual(true);
  });
});
