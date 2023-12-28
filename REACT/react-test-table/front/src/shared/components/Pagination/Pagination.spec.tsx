import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Pagination } from './Pagination';

describe('Pagination Component', () => {
    it('should render pagination with correct number of items', () => {
        const { getAllByRole } = render(<Pagination items={5} />);
        const paginationItems = getAllByRole('listitem');
        expect(paginationItems).toHaveLength(7);
    })

});
