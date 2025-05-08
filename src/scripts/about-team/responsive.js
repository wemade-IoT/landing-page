function getCSSVariableValue(variableName) {
    return parseInt(getComputedStyle(document.documentElement)
        .getPropertyValue(variableName)
        .trim());
}

function applyResponsiveStyles() {
    const grid = document.querySelector('.about-team__grid');
    if (!grid) return;

    const breakpointDesktop = getCSSVariableValue('--breakpoint-desktop');
    const breakpointLaptop = getCSSVariableValue('--breakpoint-laptop');
    const breakpointTablet = getCSSVariableValue('--breakpoint-tablet');

    const width = window.innerWidth;

    grid.style.gridTemplateColumns = 'repeat(4, 219px)';
    grid.style.gap = '50px';
    grid.style.gridTemplateRows = 'repeat(2, 320px)';

    if (width <= breakpointTablet) {
        grid.style.gridTemplateColumns = '219px';
        grid.style.gridTemplateRows = 'repeat(8, auto)';
        grid.style.gap = '16px';
    } else if (width <= breakpointLaptop) {
        grid.style.gridTemplateColumns = 'repeat(2, 219px)';
        grid.style.gridTemplateRows = 'repeat(4, 320px)';
    } else if (width <= breakpointDesktop) {
        grid.style.gridTemplateColumns = 'repeat(3, 219px)';
        grid.style.gridTemplateRows = 'repeat(3, 320px)';
    }
}

document.addEventListener('DOMContentLoaded', applyResponsiveStyles);

window.addEventListener('resize', applyResponsiveStyles);