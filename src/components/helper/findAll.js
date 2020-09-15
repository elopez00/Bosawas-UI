import React from 'react'

/**
 * Gets all elements in the the children prop and returns an object organized by 
 * the input component's display name while all others are placed under the "other"
 * key.
 * @param {Components} children - prop containing every element within a component's tags
 * @param {Component} components - contains the sought after components
 * @returns {Object} - object organized by sought component's key, and others
 */
export default function findAll(children, components) {
    let result = {}; // output object
    let typeMap = {}; // object containing all the display names of the components

    // initializes type map
    for (let component of components) {
        typeMap[component?.displayName || component?.name] = 1; 
    }
    
    let index = -1; // the order in which component was rendered in DOM

    React.Children.forEach(children, child => {
        index++;
        const childType = child?.type?.displayName || child?.type?.name;
        const childInfo = { child, index };

        if (!childType || !typeMap[childType]) return result["other"] = result["other"] ? [...result["other"], childInfo] : [childInfo];
        else return result[childType] = result[childType] ? [...result[childType], childInfo] : [childInfo];
    })

    return result;
}