import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Services from '@/components/Services';

describe('Services Component', () => {
  it('renders services section', () => {
    render(<Services />);
    const text = screen.getByText(/Consulenza e Supporto Specialistico/i);
    expect(text).toBeInTheDocument();
  });

  it('displays service cards with pedagogical content', () => {
    render(<Services />);
    const parentText = screen.getByText(/Per Genitori/i);
    expect(parentText).toBeInTheDocument();
  });

  it('contains educational support content', () => {
    render(<Services />);
    const servicesText = screen.getByText(/Supporto specialistico/i);
    expect(servicesText).toBeInTheDocument();
  });
});
