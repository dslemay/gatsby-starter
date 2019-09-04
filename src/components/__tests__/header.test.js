import React from 'react';
import { render } from '@testing-library/react';

import Header from '../header';

describe('<Header />', () => {
  it('renders with a headline', () => {
    const title = 'Gatsby Demo';
    const { getByText } = render(<Header siteTitle={title} />);

    getByText(title);
  });
});
