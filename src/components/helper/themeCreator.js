/**
 * this function is able to shift hexadecimal colors to make them lighter and darker
 * @param {String} color - hexadecimal color code 
 * @param {Number} percent - how dark you want to make the color
 */
function colorShift(color, percent) {
    var num = parseInt(color.replace("#",""),16),
    amt = Math.round(2.55 * percent),
    R = (num >> 16) + amt,
    B = (num >> 8 & 0x00FF) + amt,
    G = (num & 0x0000FF) + amt;
    return "#" + (0x1000000 + (R<255?R<1?0:R:255)*0x10000 + (B<255?B<1?0:B:255)*0x100 + (G<255?G<1?0:G:255)).toString(16).slice(1);
  }

/**
 * makes a color theme out of a hexadecimal color
 * @param {String} color - hexadecimal color code
 */
export default function themeCreator(color) {
    console.log(color)
    return {
        default: color,
        dark: `${colorShift(color, -20)}`,
        glow: `${color}99`,
        intenseGlow: `${color}99`
    }
}

