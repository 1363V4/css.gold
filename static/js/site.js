const root = document.documentElement;
const sun = $('.sun');
const moon = $('.moon');
const sunIcon = $('img', sun);
const moonIcon = $('img', moon);
const plus = $('.plus');
const minus = $('.minus');
const colorPicker = $('#color-picker');
const images = $$('img');

function updateDisplay() {
    const light = getComputedStyle(root).getPropertyValue('--light').trim();
    sun.classList.toggle('hidden', light !== '1');
    moon.classList.toggle('hidden', light !== '0');    
    images.forEach(img => img.classList.toggle('inverted', light === '0'));
};

function toggleLight() {
    const currentLight = getComputedStyle(root).getPropertyValue('--light').trim();
    root.style.setProperty('--light', currentLight === '1' ? '0' : '1');
    updateDisplay();
};

function updateM(increment) {
    const currentM = parseFloat(getComputedStyle(root).getPropertyValue('--m')) || 0;
    const newM = Math.max(0, currentM + increment);
    root.style.setProperty('--m', newM + 'rem');
};

updateDisplay();

sunIcon.addEventListener('click', toggleLight);
moonIcon.addEventListener('click', toggleLight);

plus.addEventListener('click', () => updateM(0.1));
minus.addEventListener('click', () => updateM(-0.1));

colorPicker.addEventListener('input', function() {
    const color = this.value;
    const r = parseInt(color.slice(-6, -4), 16);
    const g = parseInt(color.slice(-4, -2), 16);
    const b = parseInt(color.slice(-2), 16);
    const hue = Math.atan2(1.732050808 * (g - b), (2 * r - g - b)) * 57.295779513;
    root.style.setProperty('--hue', hue);
})