import React from 'react'
import colors from '../../assets/colors.json'
import themeCreator from './themeCreator'

export default function determineTheme(color) {
    if (colors[color]) return colors[color];
    else if (color.includes('#') && color.length === 7 || color.length === 4) return themeCreator(color);
    else return colors.default;
}