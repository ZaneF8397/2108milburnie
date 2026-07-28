/* ========================================
   LUXURY ESTATE SHOWCASE - JAVASCRIPT
   ======================================== */

// ==================== TAB MANAGEMENT ====================

document.addEventListener('DOMContentLoaded', () => {
    initTabs();
    initPriceCalculator();
    initModals();
    initSmoothScroll();
});

function initTabs() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabName = button.getAttribute('data-tab');
            switchTab(tabName, button, tabContents, tabButtons);
        });
    });
}

function switchTab(tabName, clickedButton, tabContents, tabButtons) {
    // Remove active class from all buttons and contents
    tabButtons.forEach(btn => btn.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));

    // Add active class to clicked button and corresponding content
    clickedButton.classList.add('active');
    const activeContent = document.getElementById(`tab-${tabName}`);
    if (activeContent) {
        activeContent.classList.add('active');
    }
}

// ==================== PRICE CALCULATOR ====================

function initPriceCalculator() {
    const checkboxes = document.querySelectorAll('.option-checkbox');
    const priceCounter = document.getElementById('priceCounter');

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            updatePrice(checkboxes, priceCounter);
        });
    });
}

function updatePrice(checkboxes, priceCounter) {
    let basePrice = 0;
    let totalAddons = 0;

    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            const price = parseInt(checkbox.getAttribute('data-price'), 10);
            if (checkbox.getAttribute('data-price') === '875000') {
                basePrice = price;
            } else {
                totalAddons += price;
            }
        }
    });

    const finalPrice = basePrice + totalAddons;

    // Animate price counter update
    priceCounter.classList.remove('updated');
    void priceCounter.offsetWidth; // Trigger reflow to restart animation
    priceCounter.classList.add('updated');

    // Update text with formatted currency
    priceCounter.textContent = formatCurrency(finalPrice);
}

function formatCurrency(amount) {
    return '$' + amount.toLocaleString('en-US');
}

// ==================== MODAL MANAGEMENT ====================

function initModals() {
    const reachOutButton = document.getElementById('reachOutButton');
    const scheduleButton = document.getElementById('scheduleConsultButton');
    const lockModal = document.getElementById('lockModal');
    const consultModal = document.getElementById('consultModal');

    if (reachOutButton) {
        reachOutButton.addEventListener('click', () => {
            openModal('consultModal');
        });
    }

    if (scheduleButton) {
        scheduleButton.addEventListener('click', () => {
            openModal('consultModal');
        });
    }

    // Close modal when clicking overlay
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
        overlay.addEventListener('click', (e) => {
            const modal = e.target.closest('.modal');
            if (modal) {
                closeModal(modal.id);
            }
        });
    });
}

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// Handle modal closing with escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const activeModals = document.querySelectorAll('.modal.active');
        activeModals.forEach(modal => {
            modal.classList.remove('active');
        });
        document.body.style.overflow = 'auto';
    }
});

// ==================== FORM HANDLING ====================

async function handleConsultSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const submitButton = form.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;

    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;

    try {
        const res = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formData
        });

        const data = await res.json();

        if (res.ok && (data.success === true || data.success === 'true')) {
            logEvent('consult_form_submitted', { status: 'success' });
            submitButton.textContent = 'Request Submitted ✓';
            // brief confirmation then close modal
            setTimeout(() => {
                closeModal('consultModal');
                submitButton.textContent = originalText;
                submitButton.disabled = false;
                form.reset();
            }, 1500);
        } else {
            throw new Error((data && data.message) ? data.message : 'Submission failed');
        }
    } catch (err) {
        console.error('Web3Forms error:', err);
        logEvent('consult_form_submitted', { status: 'error', error: String(err) });
        submitButton.textContent = 'Send Failed — Try Again';
        submitButton.disabled = false;
        // Optionally show inline error UI here
    }
}

// ==================== SMOOTH SCROLL ====================

function initSmoothScroll() {
    // Already enabled via CSS: scroll-behavior: smooth;
    // This function adds support for smooth scroll to specific sections
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                smoothScroll(href.substring(1));
            }
        });
    });
}

function smoothScroll(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// ==================== HEADER SCROLL EFFECTS ====================

// Add subtle effects when scrolling
window.addEventListener('scroll', () => {
    const heroSection = document.querySelector('.hero');
    const heroImage = document.querySelector('.hero-image');

    if (heroImage && window.scrollY < window.innerHeight) {
        // Parallax effect on hero image
        const scrollPercent = window.scrollY / window.innerHeight;
        heroImage.style.transform = `scale(${1 + scrollPercent * 0.1})`;
    }
});

// ==================== UTILITY FUNCTIONS ====================

// Intersection Observer for fade-in animations on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe section titles for fade-in
document.querySelectorAll('.section-title').forEach(title => {
    title.style.opacity = '0';
    title.style.transform = 'translateY(20px)';
    title.style.transition = 'all 0.6s ease';
    observer.observe(title);
});

// ==================== ACCESSIBILITY ENHANCEMENTS ====================

// Keyboard navigation for tab buttons
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
        const activeButton = document.querySelector('.tab-button.active');
        if (!activeButton) return;

        const allButtons = Array.from(document.querySelectorAll('.tab-button'));
        const currentIndex = allButtons.indexOf(activeButton);

        let nextIndex;
        if (e.key === 'ArrowLeft') {
            nextIndex = currentIndex === 0 ? allButtons.length - 1 : currentIndex - 1;
        } else {
            nextIndex = currentIndex === allButtons.length - 1 ? 0 : currentIndex + 1;
        }

        allButtons[nextIndex].click();
        allButtons[nextIndex].focus();
    }
});

// ==================== PERFORMANCE OPTIMIZATIONS ====================

// Lazy load images
if ('IntersectionObserver' in window) {
    const lazyImages = document.querySelectorAll('img');
    lazyImages.forEach(img => {
        if (!img.src) return; // Skip images without src
        observer.observe(img);
    });
}

// ==================== EVENT LOGGING ==================== 

// Optional: Log user interactions for analytics
function logEvent(eventName, eventData = {}) {
    console.log(`Event: ${eventName}`, eventData);
    // Here you would typically send this to an analytics service
}

// Track tab switches
document.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', function() {
        const tabName = this.getAttribute('data-tab');
        logEvent('tab_switched', { tab: tabName });
    });
});

// Track price calculator interactions
document.querySelectorAll('.option-checkbox').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        const item = this.closest('.option-item');
        const titleElement = item ? item.querySelector('strong') : null;
        const title = titleElement ? titleElement.textContent.trim() : 'Unknown option';
        const price = this.getAttribute('data-price');
        logEvent('upgrade_toggled', {
            upgrade: title,
            price: price,
            checked: this.checked
        });
    });
});

// Track CTA button clicks
document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('click', function() {
        const buttonText = this.textContent.trim();
        logEvent('cta_clicked', { button: buttonText });
    });
});

// ==================== INITIALIZATION COMPLETE ====================

console.log('Luxury Estate Showcase - All systems initialized ✓');
