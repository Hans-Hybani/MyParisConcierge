// Set the date we're counting down to
var countDownDate = new Date("July 26, 2024 08:00:00").getTime();

// Update the countdown every 1 second
var x = setInterval(function() {

  // Get the current date and time
  var now = new Date().getTime();

  // Calculate the remaining time
  var distance = countDownDate - now;

  // Calculate days, hours, minutes, and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the corresponding elements
  document.getElementById("days").innerText = formatTime(days);
  document.getElementById("hours").innerText = formatTime(hours);
  document.getElementById("minutes").innerText = formatTime(minutes);
  document.getElementById("seconds").innerText = formatTime(seconds);

  // If the countdown is finished, display a message
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "<p>The Olympics have started!</p>";
  }
}, 1000);

// Function to format time with leading zero if needed
function formatTime(time) {
  return time < 10 ? "0" + time : time;
}
