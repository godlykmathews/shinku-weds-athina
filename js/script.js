// Wedding Invitation JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Handle loading animation
    const loadingOverlay = document.querySelector('.loading-overlay');
    
    // Ensure content is ready before animations complete
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 3000);
    
    // Make sure loading overlay is removed even if animation fails
    setTimeout(() => {
        if (loadingOverlay) {
            loadingOverlay.style.display = 'none';
        }
    }, 5000);
    
    // RSVP Form Handling
    const rsvpForm = document.getElementById('rsvp-form');
    
    if (rsvpForm) {
        rsvpForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(rsvpForm);
            const rsvpData = {};
            
            formData.forEach((value, key) => {
                rsvpData[key] = value;
            });
            
            // Store in localStorage (in a real application, you'd send to a server)
            saveRSVP(rsvpData);
            
            // Show confirmation message
            showConfirmation();
            
            // Reset the form
            rsvpForm.reset();
        });
    }
    
    // Save RSVP data to localStorage
    function saveRSVP(data) {
        // Get existing RSVPs or create a new array
        const rsvps = JSON.parse(localStorage.getItem('weddingRSVPs')) || [];
        
        // Add this RSVP with a timestamp
        data.timestamp = new Date().toISOString();
        rsvps.push(data);
        
        // Save back to localStorage
        localStorage.setItem('weddingRSVPs', JSON.stringify(rsvps));
    }
    
    // Display a confirmation message
    function showConfirmation() {
        const rsvpSection = document.querySelector('.rsvp');
        
        // Create confirmation element
        const confirmation = document.createElement('div');
        confirmation.className = 'confirmation';
        confirmation.innerHTML = `
            <h3>Thank you for your RSVP!</h3>
            <p>We've received your response and look forward to celebrating with you.</p>
        `;
        
        // Style the confirmation
        confirmation.style.backgroundColor = '#d4e9d4';
        confirmation.style.padding = '20px';
        confirmation.style.borderRadius = '5px';
        confirmation.style.marginTop = '20px';
        confirmation.style.textAlign = 'center';
        
        // Add to page temporarily
        rsvpSection.appendChild(confirmation);
        
        // Remove after 5 seconds
        setTimeout(() => {
            confirmation.style.opacity = '0';
            confirmation.style.transition = 'opacity 1s';
            
            setTimeout(() => {
                rsvpSection.removeChild(confirmation);
            }, 1000);
        }, 5000);
    }
    
    // Countdown timer implementation
    function initializeCountdown() {
        // Set the wedding date - October 30, 2025 at 3:00 PM
        const weddingDate = new Date('October 30, 2025 15:00:00').getTime();
        
        // Get DOM elements for countdown
        const daysElement = document.getElementById('countdown-days');
        const hoursElement = document.getElementById('countdown-hours');
        const minutesElement = document.getElementById('countdown-minutes');
        const secondsElement = document.getElementById('countdown-seconds');
        
        // Function to update the countdown
        function updateCountdown() {
            // Get current date and time
            const now = new Date().getTime();
            
            // Find the distance between now and the wedding date
            const distance = weddingDate - now;
            
            // Time calculations for days, hours, minutes and seconds
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
            // Display the result with padding for single digits
            if (daysElement) daysElement.textContent = days.toString().padStart(2, '0');
            if (hoursElement) hoursElement.textContent = hours.toString().padStart(2, '0');
            if (minutesElement) minutesElement.textContent = minutes.toString().padStart(2, '0');
            
            // For seconds, add a pulse animation each time it changes
            if (secondsElement) {
                const currentValue = secondsElement.textContent;
                const newValue = seconds.toString().padStart(2, '0');
                
                secondsElement.textContent = newValue;
                
                if (currentValue !== newValue) {
                    secondsElement.classList.add('pulse');
                    setTimeout(() => {
                        secondsElement.classList.remove('pulse');
                    }, 500);
                }
            }
            
            // If the countdown is over, display a message
            if (distance < 0) {
                if (daysElement) daysElement.textContent = "00";
                if (hoursElement) hoursElement.textContent = "00";
                if (minutesElement) minutesElement.textContent = "00";
                if (secondsElement) secondsElement.textContent = "00";
            }
        }
        
        // Update the countdown every second
        updateCountdown();
        setInterval(updateCountdown, 1000);
    }
    
    // Initialize the countdown
    initializeCountdown();
    
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
