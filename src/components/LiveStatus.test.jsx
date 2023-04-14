import React from 'react';
import { render, screen } from '@testing-library/react';
import LiveStatus from './LiveStatus';
import { getStatusTextAndColor } from '@/utils/getStatusTextAndColor';

jest.mock('@/utils/getStatusTextAndColor', () => ({
  getStatusTextAndColor: jest.fn(() => ({
    statusText: 'Sample Status',
    textColor: 'text-green-500',
  })),
}));

describe('LiveStatus', () => {
  it('renders the status text with the correct text color', () => {
    const node = { someProperty: 'someValue' };
    const { getByText } = render(<LiveStatus node={node} />);
    expect(getStatusTextAndColor).toHaveBeenCalledWith(node);
    expect(getByText('Sample Status')).toBeInTheDocument();
    expect(getByText('Sample Status')).toHaveClass('text-sm block mb-3 uppercase');
  });
});

