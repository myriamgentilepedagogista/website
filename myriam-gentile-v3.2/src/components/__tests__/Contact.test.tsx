import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import Contact from '@/components/Contact';

describe('Contact Component', () => {
  it('renders without crashing', () => {
    const { container } = render(<Contact />);
    expect(container).toBeTruthy();
  });

  it('contains section element', () => {
    const { container } = render(<Contact />);
    const section = container.querySelector('section');
    expect(section).toBeTruthy();
  });

  it('has content rendered', () => {
    const { container } = render(<Contact />);
    const content = container.textContent;
    expect(content && content.length > 0).toBe(true);
  });
});
