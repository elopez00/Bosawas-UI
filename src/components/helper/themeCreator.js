/**
 * this function is able to shift hexadecimal colors to make them lighter and darker
 * @param {String} color - hexadecimal color code 
 * @param {Number} percent - how dark you want to make the color
 */
const colorShift = (color, percent) => {
    // convert hex to int
    let num = parseInt(color.replace("#",""), 16);

    // convert to rgb
    let amt = Math.round(2.55 * percent);
    let r = (num >> 16) + amt;
    let b = (num >> 8 & 0x00FF) + amt;
    let g = (num & 0x0000FF) + amt;
    
    return "#" + ( 
        0x1000000 
         + (r < 255 ? r < 1 ? 0 : r : 255) * 0x10000
         + (b < 255 ? b < 1 ? 0 : b : 255) * 0x100
         + (g < 255 ? g < 1 ? 0 : g : 255) 
    ).toString(16)
    .slice(1);
}

/**
 * Return the color of 
 * @param {String} color - hexadecimal color 
 */
const getTextColor = color => {
    let hexcolor = color.slice(1);

    // convert to rgb
    let r = parseInt(hexcolor.substr(0,2),16);
	let g = parseInt(hexcolor.substr(2,2),16);
    let b = parseInt(hexcolor.substr(4,2),16);
    
    // Get YIQ ratio
	let yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;

	// Check contrast
	return (yiq >= 158) ? 'black' : 'white';
}

/**
 * makes a color theme out of a hexadecimal color
 * @param {String} color - hexadecimal color code
 */
export default function themeCreator(color) {
    return {
        default: color,
        dark: `${colorShift(color, -20)}`,
        glow: `${color}66`,
        intenseGlow: `${color}99`,
        color: `${getTextColor(color)}`
    }
}

