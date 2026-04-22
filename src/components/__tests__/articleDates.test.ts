import { describe, it, expect } from 'vitest';
import { articleIsoDateBySlug } from '@/components/articleDates';

describe('Article Dates', () => {
  it('exports article date mapping', () => {
    expect(articleIsoDateBySlug).toBeDefined();
    expect(typeof articleIsoDateBySlug).toBe('object');
  });

  it('contains ISO formatted dates', () => {
    const dates = Object.values(articleIsoDateBySlug);
    expect(dates.length).toBeGreaterThan(0);
    dates.forEach((date) => {
      expect(typeof date).toBe('string');
      expect(date).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    });
  });
});
