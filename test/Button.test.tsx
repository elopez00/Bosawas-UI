import React from 'react';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { axe, toHaveNoViolations } from 'jest-axe';
expect.extend(toHaveNoViolations);

import { Button } from '../src';

describe('Button', () => {
    it('has no accessibility violations', async () => {
        // given
        const { container: button } = render(<Button>Hello World</Button>);
        
        // when 
        const result = await axe(button);

        // then
        expect(result).toHaveNoViolations();
    });

    it('renders correctly', () => {
        // given
        render(<Button>Hello World</Button>);

        // when then
        expect(screen.getByRole('button')).toBeInTheDocument();
    })

    it('fires on click callback', () => {
        // given
        const onClick: jest.Mock<any> = jest.fn();
        render(<Button onClick={onClick}>Hello World</Button>);

        // when
        userEvent.click(screen.getByRole('button'));

        // then
        expect(onClick).toHaveBeenCalledTimes(1);
    })
});
