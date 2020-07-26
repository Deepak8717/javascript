/* eslint-disable no-undef */

import React from 'react';
import { render } from '@testing-library/react';
import FilmsBox from './FilmsBox';

describe('FilmsBox', () => {
  test('should not render when currentCharacter is not provided', () => {
    const { queryByText } = render(<FilmsBox currentCharacterName={null} />);
    const linkElement = queryByText(/featured in/i);
    expect(linkElement).not.toBeInTheDocument();
  });

  test('should render when currentCharacter is provided', () => {
    const films = [{ title: 'Star Wars' }];
    const { getByText } = render(
      <FilmsBox currentCharacterName='Lucas' films={films} />
    );
    expect(getByText(/featured in/i)).toBeInTheDocument();
    expect(getByText('Lucas')).toBeInTheDocument();
    expect(getByText('Star Wars')).toBeInTheDocument();
  });
});
