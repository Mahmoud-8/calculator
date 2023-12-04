import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom';
import { render, waitFor } from '@testing-library/react';
import Calculator from './Calculator';

describe('Calculator component', () => {
  it('renders without crashing', () => {
    const { container } = render(<Calculator />);
    expect(container).toBeInTheDocument();
  });

  it('displays input correctly', async () => {
    const user = userEvent.setup();
    const { getByText } = render(<Calculator />);
    await user.click(getByText('1'));
    await user.click(getByText('+'));
    await user.click(getByText('2'));
    expect(getByText('1+2')).toBeInTheDocument();
  });

  it('handles addition correctly', async () => {
    const user = userEvent.setup();
    const { getByText, findByText } = render(<Calculator />);
    await user.click(getByText('1'));
    await user.click(getByText('+'));
    await user.click(getByText('2'));
    await user.click(getByText('='));
    const result = await findByText('3', { selector: '.display' });
    expect(result).toBeInTheDocument();
  });

  it('handles subtraction correctly', async () => {
    const user = userEvent.setup();
    const { getByText, findByText } = render(<Calculator />);
    await user.click(getByText('5'));
    await user.click(getByText('-'));
    await user.click(getByText('2'));
    await user.click(getByText('='));
    const result = await findByText('3', { selector: '.display' });
    expect(result).toBeInTheDocument();
  });

  it('handles multiplication correctly', async () => {
    const user = userEvent.setup();
    const { getByText, findByText } = render(<Calculator />);
    await user.click(getByText('4'));
    await user.click(getByText('*'));
    await user.click(getByText('3'));
    await user.click(getByText('='));
    const result = await findByText('12', { selector: '.display' });
    expect(result).toBeInTheDocument();
  });

  it('handles division correctly', async () => {
    const user = userEvent.setup();
    const { getByText, findByText } = render(<Calculator />);
    await user.click(getByText('8'));
    await user.click(getByText('/'));
    await user.click(getByText('2'));
    await user.click(getByText('='));
    const result = await findByText('4', { selector: '.display' });
    expect(result).toBeInTheDocument();
  });

  it('handles square root correctly', async () => {
    const user = userEvent.setup();
    const { queryAllByText } = render(<Calculator />);
    await user.click(queryAllByText('sqrt')[0]);
    await waitFor(() => expect(queryAllByText('3')).toHaveLength(1));
  });
  

  it('handles x^2 correctly', async () => {
    const user = userEvent.setup();
    const { getByText } = render(<Calculator />);
    await user.click(getByText('4'));
    await user.click(getByText('x^2'));
    await waitFor(() => expect(getByText('16')).toBeInTheDocument());
  }); 
});
