import React from 'react'

/**
 * Function that will take a desired component and will return every instance of 
 * that component in the children prop
 * @param {Components} children - prop containing every element within a component's tags
 * @param {Component} component - component to find
 * @returns {Array} - array of components matching the component param
 */
export default function findByType(children, component) {
    let result = []; // output array containing all components
    const type = [component.displayName] || [component.name]; // retrieves the displayName or name of the component to find

    // loop through every child element in children
    React.Children.forEach(children, child => {
        const childType = child?.type?.displayName || child?.type?.name;
        if (type.includes(childType)) {
            result.push(child);
        }
    })

    return result;
}