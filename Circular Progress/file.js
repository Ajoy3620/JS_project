// Function to update the progress bar
function updateProgress(percent) {
  const radius = 90; // Radius of the circle
  const circumference = 2 * Math.PI * radius;
  const progressRing = document.querySelector(
    '.progress-ring-circle[data-progress="0"]'
  );
  const progressText = document.getElementById("progress-text");

  // Calculate the offset for the stroke
  const offset = circumference - (percent / 100) * circumference;

  // Apply the stroke dasharray and stroke dashoffset
  progressRing.style.strokeDasharray = `${circumference}px ${circumference}px`;
  progressRing.style.strokeDashoffset = `${offset}px`;

  // Update the progress text
  progressText.textContent = `${percent}%`;
}

// Function to handle manual input and update progress
function updateProgressManually() {
  const percentInput = document.getElementById("percentInput").value;
  const percent = parseInt(percentInput, 10); // Convert input to integer

  if (isNaN(percent) || percent < 0 || percent > 100) {
    alert("Not Bigger Than 100%.");
    return;
  }

  if (percent > 100) {
    alert("Percentage cannot be more than 100%.");
    return;
  }

  updateProgress(percent);
}

// Initial call to set progress to 0%
updateProgress(0);
