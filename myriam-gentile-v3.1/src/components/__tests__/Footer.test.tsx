import { describe, it, expect, vi } from 'vitest';
import { render } from '@testing-library/react';
import Footer from '@/components/Footer';

describe('Footer Component', () => {
  const mockOnOpen = vi.fn();

  it('renders without crashing', () => {
    const { container } = render(<Footer onOpenContact={mockOnOpen} />);
    expect(container).toBeTruthy();
  });

  it('contains footer element', () => {
    const { container } = render(<Footer onOpenContact={mockOnOpen} />);
    const footer = container.querySelector('footer');
    expect(footer).toBeTruthy();
  });

  it('accepts onOpenContact prop', () => {
    render(<Footer onOpenContact={mockOnOpen} />);
    expect(mockOnOpen).toBeDefined();
  });
});
