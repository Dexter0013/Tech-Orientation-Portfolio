/**
 * Custom Live 3D Vanta Waves Background Initialization
 * Uses Three.js and Vanta.js to render a dynamic water-like background.
 */
let vantaEffect = null;

if (typeof VANTA !== 'undefined') {
    const isDark = localStorage.getItem('theme') === 'dark';
    vantaEffect = VANTA.WAVES({
        el: "#canvas-bg",
        mouseControls: false,
        touchControls: false,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: isDark ? 0x101c22 : 0x5380e0, // #2563eb deeper blue for light mode, dark ocean for dark mode
        shininess: isDark ? 44.00 : 30.00,
        waveSpeed: 0.45,
        zoom: 0.94
    });
}

// Select Nav Elements
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const lines = document.querySelectorAll('.line');

/**
 * Toggles the mobile navigation menu and animates the hamburger icon.
 * Also updates accessibility attributes.
 */
hamburger.addEventListener('click', () => {
    const isActive = navLinks.classList.toggle('active');
    hamburger.setAttribute('aria-expanded', isActive);
    
    // Burger Animation to "X"
    if (isActive) {
        lines[0].style.transform = 'rotate(45deg) translate(5px, 6px)';
        lines[1].style.opacity = '0';
        lines[2].style.transform = 'rotate(-45deg) translate(5px, -6px)';
    } else {
        lines[0].style.transform = 'none';
        lines[1].style.opacity = '1';
        lines[2].style.transform = 'none';
    }
});

// Also allow toggling via keyboard (Enter or Space) for accessibility
hamburger.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        hamburger.click();
    }
});

/**
 * Smooth scrolling and mobile menu auto-close functionality.
 * Ensures the mobile menu closes automatically when a navigation link is clicked.
 */
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
        lines[0].style.transform = 'none';
        lines[1].style.opacity = '1';
        lines[2].style.transform = 'none';
    });
});

/**
 * Handles the contact form submission asynchronously.
 * Prevents the default page reload, sends data via fetch to Formspree,
 * and playfully updates the submit button text based on success or failure.
 * 
 * @param {Event} e - The form submission event
 */
document.getElementById('contact-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const form = e.target;
    const btn = form.querySelector('button');
    const originalText = btn.innerText;

    // Show loading state
    btn.innerText = 'Sending...';
    btn.disabled = true;

    try {
        const response = await fetch(form.action, {
            method: form.method,
            body: new FormData(form),
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            // Success state playfully
            btn.innerText = 'Sent Successfully! 🎉';
            btn.style.backgroundColor = '#10b981'; // Emerald Green
            btn.style.color = '#ffffff';
            form.reset();
        } else {
            // Error state
            btn.innerText = 'Oops! Try again.';
            btn.style.backgroundColor = '#ef4444'; // Red
        }
    } catch (error) {
        // Error state
        btn.innerText = 'Network Error.';
        btn.style.backgroundColor = '#ef4444'; // Red
    }
    
    // Reset button after 3 seconds
    setTimeout(() => {
        btn.innerText = originalText;
        btn.style.backgroundColor = ''; // Reverts to CSS class default
        btn.style.color = '';
        btn.disabled = false;
    }, 3000);
});

/**
 * Dark Mode Theme Toggle and Initialization.
 * Checks localStorage for the user's preference and updates
 * the UI, the toggle button icon, and the Vanta background settings.
 */
const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;

// Check for saved theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
    body.classList.add('dark-mode');
    themeToggle.innerText = '☀️';
    if (vantaEffect) {
        vantaEffect.setOptions({
            color: 0x101c22,
            shininess: 44.00
        });
    }
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    let theme = 'light';
    if (body.classList.contains('dark-mode')) {
        theme = 'dark';
        themeToggle.innerText = '☀️';
        if (vantaEffect) {
            vantaEffect.setOptions({
                color: 0x101c22,
                shininess: 44.00
            });
        }
    } else {
        themeToggle.innerText = '🌙';
        if (vantaEffect) {
            vantaEffect.setOptions({
                color: 0x2563eb,
                shininess: 30.00
            });
        }
    }
    localStorage.setItem('theme', theme);
});
