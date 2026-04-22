import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import About from '@/components/About';

describe('About Component', () => {
  it('renders without crashing', () => {
    const { container } = render(<About />);
    expect(container).toBeTruthy();
  });

  it('returns a valid React component', () => {
    const { container } = render(<About />);
    const section = container.querySelector('section');
    expect(section).toBeTruthy();
  });

  it('contains content', () => {
    const { container } = render(<About />);
    const content = container.textContent;
    expect(content && content.length > 0).toBe(true);
  });
});
