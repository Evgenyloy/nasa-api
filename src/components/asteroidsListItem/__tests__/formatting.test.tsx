import { it, describe, expect } from 'vitest';
import { dateFormatting, numberFormatting } from '../utils';

describe('formatting test', () => {
  it('should formatting date', () => {
    const actualResult = dateFormatting('2025-01-26');

    const expectedResult = '25 янв. 2025 г.';

    expect(actualResult).toBe(expectedResult);
  });
  it('should formatting number', () => {
    const actualResult = numberFormatting('27504342.553517463');

    const expectedResult = '27 504 343';

    expect(actualResult).toBe(expectedResult);
  });
});
