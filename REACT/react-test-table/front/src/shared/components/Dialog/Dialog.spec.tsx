import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Dialog } from './Dialog';

describe('Dialog Component', () => {
    it('does not render dialog when opened is false', () => {
        const content = <p>Hello, Dialog!</p>;
        const { queryByTestId } = render(<Dialog open={false} html={content} />);
        const dialogBack = queryByTestId('dialog-back');
        expect(dialogBack).toBeNull();
    });

    it('should render when open is true', () => {
        const htmlContent = <div>Dialog Content</div>;
        const { queryByText } = render(<Dialog open={true} html={htmlContent} />);
        expect(queryByText('Dialog Content')).toBeTruthy();
    });

    it('should apply custom styles and position', () => {
        const htmlContent = <div>Dialog Content</div>;
        const position = 'top';
        const styles = 'custom-styles';
        const { container } = render(
            <Dialog open={true} html={htmlContent} position={position} styles={styles} />
        );

        const backElement = container.querySelector('.back.top');
        expect(backElement).toBeTruthy();

        const dialogContainer = container.querySelector('.custom-styles');
        expect(dialogContainer).toBeTruthy();
    });
});
