import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import FAQ from '@/components/FAQ';

describe('FAQ Component', () => {
  it('renders without crashing', () => {
    const { container } = render(<FAQ />);
    expect(container).toBeTruthy();
  });

  it('contains section element', () => {
    const { container } = render(<FAQ />);
    const section = container.querySelector('section');
    expect(section).toBeTruthy();
  });

  it('renders content', () => {
    const { container } = render(<FAQ />);
    const content = container.textContent;
    expect(content && content.length > 0).toBe(true);
  });
});
