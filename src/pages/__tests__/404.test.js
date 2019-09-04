import React from 'react';
import { render } from '@testing-library/react';

import mockPageQueries from '../../page-query-mocks';

import NotFoundPage from '../404';

beforeEach(mockPageQueries);

describe('<NotFoundPage />', () => {
  it('renders correctly', () => {
    const { getByText } = render(<NotFoundPage />);

    const header = getByText(/not found/i);
    expect(header.tagName).toBe('H1');
  });
});
