// Get the form and message display elements
const form = document.getElementById('myForm');
const messageDisplay = document.getElementById('messageDisplay');

// Add event listeners for the "change" event on input fields
form.addEventListener('change', function(event) {
  const target = event.target;
  const message = `Changed input field: ${target.name}`;
  messageDisplay.textContent = message;
});

// Get the tooltip element
const tooltip = document.getElementById('tooltip');

// Create a tooltip text element
const tooltipText = document.createElement('span');
tooltipText.classList.add('tooltip-text');
tooltipText.textContent = 'This is a tooltip!';
tooltip.appendChild(tooltipText);

// Add event listeners for "mouseenter" and "mouseleave" events
tooltip.addEventListener('mouseenter', function() {
  tooltipText.style.visibility = 'visible';
  tooltipText.style.opacity = 1;
});

tooltip.addEventListener('mouseleave', function() {
  tooltipText.style.visibility = 'hidden';
  tooltipText.style.opacity = 0;
});
