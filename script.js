document.addEventListener('DOMContentLoaded', () => {
    // Initialize AOS (Animate on Scroll)
    AOS.init({
        duration: 1000,
        once: true,
        mirror: false,
        offset: 100
    });

    // Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle
    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            // In a real implementation, you'd add a mobile-active class 
            // and style it in CSS. For now, let's just toggle visibility
            // or provide a placeholder for more advanced logic.
            alert('Mobile menu clicked! (Integrate sidebar logic here)');
        });
    }

    // Smooth Scroll for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Simple interaction for stats (counter effect placeholder)
    // You could use a library like countUp.js for real animations
    const stats = document.querySelectorAll('.stat-num');
    stats.forEach(stat => {
        // Just a subtle hover effect if not animated
        stat.parentElement.addEventListener('mouseenter', () => {
            stat.style.color = 'var(--secondary)';
        });
        stat.parentElement.addEventListener('mouseleave', () => {
            stat.style.color = 'var(--text-main)';
        });
    });
});
