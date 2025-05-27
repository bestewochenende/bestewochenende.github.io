// countdown.js
document.addEventListener('DOMContentLoaded', function() {
  function initializeCountdown(targetElementId, targetDate) {
    const countdownElement = document.getElementById(targetElementId);
    if (!countdownElement) return;

    function updateCountdown() {
      const currentDate = new Date();
      const timeLeft = new Date(targetDate) - currentDate;
      
      // Calculate time units
      let days, hours, minutes, seconds;
      
      if (timeLeft <= 0) {
        // Show zeros instead of "Time's up!"
        days = hours = minutes = seconds = 0;
        
        // Force a small delay and then add celebration class to ensure CSS is applied properly
        setTimeout(() => {
          // Add celebration class for blinking animation if not already added
          if (!countdownElement.classList.contains('countdown-celebration')) {
            countdownElement.classList.add('countdown-celebration');
          }
        }, 50);
      } else {
        // If countdown is active, remove celebration class if present
        countdownElement.classList.remove('countdown-celebration');
        
        days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
      }
      
      // Update the countdown display
      countdownElement.innerHTML = `
        <div class="countdown-container">
          <div class="countdown-item">
            <div class="countdown-value">${days}</div>
            <div class="countdown-label">Days</div>
          </div>
          <div class="countdown-item">
            <div class="countdown-value">${hours}</div>
            <div class="countdown-label">Hours</div>
          </div>
          <div class="countdown-item">
            <div class="countdown-value">${minutes}</div>
            <div class="countdown-label">Minutes</div>
          </div>
          <div class="countdown-item">
            <div class="countdown-value">${seconds}</div>
            <div class="countdown-label">Seconds</div>
          </div>
        </div>
      `;
    }
    
    // Initial update
    updateCountdown();
    
    // Update every second
    setInterval(updateCountdown, 1000);
  }
  
  // Make it available globally
  window.initializeCountdown = initializeCountdown;
});
