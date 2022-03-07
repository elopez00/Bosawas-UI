import type { FC, HTMLAttributes, CSSProperties } from 'react';
import React from 'react';

import type * as CSS from 'csstype';
import style from './Text.module.css';

export interface IText extends HTMLAttributes<HTMLSpanElement> {
    /** Changes color of text */
    color?: CSS.Property.Color,
    /** Changes font size of text */
    fontSize?: CSS.Property.FontSize,
    /** Given a link, the text will turn to a hyperlink */
    link?: string;
    /** Converts text to bold */
    bold?: boolean;
    /** Underlines text */
    underline?: boolean;
    /** Italicizes text */
    italics?: boolean;
    /** Breaks text when inline */
    newLine?: boolean;
    /** Determines what kind of header the component is (0 means it's not a header) */
    h?: 0 | 1 | 2 | 3;
    /** Determines whether it has default margins or not */
    excludeMargins?: boolean;
}

/**
 * Bosawas main typography component. Used for quick text mutations as well as helps maintain uniform
 * text formatting.
 * 
 * @return Typography component
 */
const Text: FC<IText> = ({ 
    excludeMargins = false,
    h = 0,
    children,
    link,
    bold,
    italics,
    underline,
    newLine,
    ...props 
}) => {
    const TextComponent = (
        <div 
            {...props}
            className={getClassName({ bold, italics, h, underline, newLine, excludeMargins })}
            style={getStyle(props)}
        >
            {children}
        </div>
    );
    
    return <>{ link ? <a target="_blank" href={link}>{TextComponent}</a> : TextComponent}</>
}

/**
 * Gets all text modifiers and returns the class name that will grant all modifications
 * 
 * @return className with all text modifications
 */
const getClassName = ({ bold, underline, italics, newLine, h, excludeMargins }: IText): string => {
    let className = `${style.text} `;

    if (h) {
        if (h == 1) className += style.h1 + ' ';
        if (h == 2) className += style.h2 + ' ';
        if (h == 3) className += style.h3 + ' ';
    }

    if (bold) className += style.bold + ' ';
    if (underline) className += style.underline + ' ';
    if (italics) className += style.italics + ' ';
    if (newLine) className += style.newLine + ' ';
    if (excludeMargins) className += style.excludeMargins;

    return className;
};

/**
 * Given granular text modifiers, this function will return a CSS object applying all property
 * driven text mutations
 * 
 * @return style object containing new component style
 */
const getStyle = ({ style, color, fontSize }: IText): CSSProperties => {
    const adjustedStyle: CSSProperties = style || {};

    if (color) adjustedStyle.color = color;
    if (fontSize) adjustedStyle.fontSize = fontSize;

    return adjustedStyle;
}

export default Text;
