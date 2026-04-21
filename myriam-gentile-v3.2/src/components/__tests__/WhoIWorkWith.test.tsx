import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import WhoIWorkWith from '@/components/WhoIWorkWith';

describe('WhoIWorkWith Component', () => {
  it('renders who I work with section', () => {
    render(<WhoIWorkWith />);
    const heading = screen.getByText(/A chi mi rivolgo/i);
    expect(heading).toBeInTheDocument();
  });

  it('displays target audience information', () => {
    render(<WhoIWorkWith />);
    const genitori = screen.getByText(/Genitori/i);
    expect(genitori).toBeInTheDocument();
  });

  it('contains educational services', () => {
    render(<WhoIWorkWith />);
    const educatrici = screen.getByText(/Educatrici/i);
    expect(educatrici).toBeInTheDocument();
  });
});
