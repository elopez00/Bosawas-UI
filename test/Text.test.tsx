import React from 'react';
import { render, screen } from '@testing-library/react';

import { axe, toHaveNoViolations } from 'jest-axe';
expect.extend(toHaveNoViolations);

import { Text } from '../src';

describe('<Text />', () => {
    it('has no accessibility violations', async () => {
        // given
        const { container: text } = render(<Text>Hello World!</Text>);
        const { container: link } = render(<Text link="https://google.com">Google it</Text>);

        // when
        const results = [];
        results[0] = await axe(text);
        results[1] = await axe(link);

        // then
        results.forEach((result: any) => expect(result).toHaveNoViolations());
    })

    it('renders correctly', () => {
        // given
        render(<Text>Hello World!</Text>);

        // when then
        expect(screen.getByText(/hello world!/i)).toBeInTheDocument();
    })

    it('converts into anchor when link is passed', () => {
        // given
        const link = "https://google.com";
        render(<Text link={link}>Google it</Text>);

        // when then
        expect(screen.getByText(/google it/i).closest('a')).toHaveAttribute('href', link);
    })
});