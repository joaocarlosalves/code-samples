import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Dropdown } from './Dropdown';

describe('Dropdown Component', () => {
  it('should apply custom styles', () => {
    const { container } = render(
      <Dropdown open={true} styles="custom-style" html={<span>Dropdown Content</span>} />
    );

    const dropdownElement = container.querySelector('.dropdown.custom-style');
    expect(dropdownElement).toBeTruthy();
  });
});
