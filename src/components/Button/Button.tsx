import type {
    CSSProperties,
    FC,
    HTMLAttributes,
    MouseEvent,
    MouseEventHandler,
} from 'react';
import React from 'react';
import * as CSS from 'csstype';

import { determineForeground } from '../../util/general';

import Text from '../Text/Text';
import styles from './Button.module.css';

export interface IButton extends HTMLAttributes<HTMLButtonElement> {
    /** Is the style variant the button is */
    variant?: 'default' | 'area';
    /** Changes the background color of the button. It also changes the text color automatically */
    background?: CSS.Property.Color;
    /** Given a link, the button will redirect you to the given link */
    link?: string;
}

/**
 * Bosawas button component. This is a familiar one. Imagine the standard button html element, but
 * simpler
 * 
 * @return button component
 */
const Button: FC<IButton> = ({
    variant = 'default',
    background,
    link,
    style,
    children,
    onClick,
    ...props
}) => {
    /**
     * Handles the click event
     *
     * @param event mouse event
     */
    const handleClick: MouseEventHandler<HTMLButtonElement> = (
        event: MouseEvent<HTMLButtonElement>
    ) => {
        onClick && onClick(event);

        if (link?.length) window.open(link, '__blank');
    };

    return (
        <button
            {...props}
            className={`${styles.button} ${styles[variant]}`}
            onClick={handleClick}
            style={getStyle({ background, style })}
        >
            <div
                className={styles.inset}
                style={getInsetStyle(determineForeground(background))}
            />
            <Text excludeMargins color={determineForeground(background)}>
                {children}
            </Text>
        </button>
    );
};

/**
 * Given props will give style object
 *
 * @return style object for button
 */
const getStyle = ({ background, style }: IButton): CSSProperties => {
    return {
        ...style,
        background,
    };
};

/**
 * Gets the inset style based on the color
 *
 * @return style object for button inset
 */
const getInsetStyle = (
    color: CSS.Property.Color | undefined
): CSSProperties => {
    return {
        background: color,
    };
};

export default Button;
