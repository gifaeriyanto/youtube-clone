import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import RichItem from '..';

describe('RichItem', () => {
  test('render successfully', () => {
    const { container } = renderWithTheme(
      <RichItem
        thumbnail="foo"
        avatar="foo"
        title="foo"
        channelTitle="foo"
        channelId="foo"
        views={20}
        publishedAt={new Date()}
      />,
    );
    expect(container).not.toBeEmptyDOMElement();
  });
});
