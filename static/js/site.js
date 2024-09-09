document.addEventListener('DOMContentLoaded', function() {
    const root = document.documentElement;
    const sun = document.querySelector('.sun');
    const moon = document.querySelector('.moon');
    const plus = document.querySelector('.plus');
    const minus = document.querySelector('.minus');
    const images = document.querySelectorAll('img');
    const colorPicker = document.querySelector('#color-picker');
    
    function updateDisplay() {
        const light = getComputedStyle(root).getPropertyValue('--light').trim();
        sun.classList.toggle('hidden', light !== '1');
        moon.classList.toggle('hidden', light !== '0');
        
        images.forEach(img => img.classList.toggle('inverted', light === '0'));
    }
    
    updateDisplay();

    function toggleLight() {
        const currentLight = getComputedStyle(root).getPropertyValue('--light').trim();
        root.style.setProperty('--light', currentLight === '1' ? '0' : '1');
        updateDisplay();
    }
    
    const sunIcon = sun.querySelector('img');
    const moonIcon = moon.querySelector('img');

    sunIcon.addEventListener('click', toggleLight);
    moonIcon.addEventListener('click', toggleLight);

    function updateM(increment) {
        const currentM = parseFloat(getComputedStyle(root).getPropertyValue('--m')) || 0;
        const newM = Math.max(0, currentM + increment);
        root.style.setProperty('--m', newM + 'rem');
    }

    plus.addEventListener('click', () => updateM(0.1));
    minus.addEventListener('click', () => updateM(-0.1));

    colorPicker.addEventListener('input', function() {
        const color = this.value;
        const r = parseInt(color.slice(-6, -4), 16);
        const g = parseInt(color.slice(-4, -2), 16);
        const b = parseInt(color.slice(-2), 16);
        const hue = Math.atan2(1.732050808 * (g - b), (2 * r - g - b)) * 57.295779513;
        root.style.setProperty('--hue', hue);
    });

    function togglePhoneDesktop() {
        const isPhone = getComputedStyle(document.documentElement).getPropertyValue('--phone').trim() === '1';
        document.querySelector('.phone').style.display = isPhone ? 'block' : 'none';
        document.querySelector('.desktop').style.display = isPhone ? 'none' : 'block';
        if (isPhone) {
            root.style.setProperty('--m', '0.6rem');
        }
    }

    togglePhoneDesktop();
    window.addEventListener('resize', togglePhoneDesktop);
});
