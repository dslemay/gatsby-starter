import React from 'react';
import { render } from '@testing-library/react';

import mockPageQueries from '../../page-query-mocks';

import Page2 from '../page-2';

beforeEach(mockPageQueries);

describe('<Page2 />', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Page2 />);

    const header = getByText(/second page/i);
    expect(header.tagName).toBe('H1');

    const link = getByText(/go back/i);
    expect(link.tagName).toBe('A');
    expect(link).toHaveAttribute('href', '/');
  });
});
