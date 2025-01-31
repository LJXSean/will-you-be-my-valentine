// Set the date we're counting down to
var countDownDate = new Date("Feb 14, 2024 00:00:00").getTime();

// Update the countdown every 1 second
var x = setInterval(function () {
	// Get today's date and time
	var now = new Date().getTime();

	// Find the distance between now and the count down date
	var distance = countDownDate - now;

	// Time calculations for days, hours, minutes and seconds
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	// If the countdown is over, write some text
	if (distance <= 0) {
		let banner = document.getElementById("bot");
		banner.src = "./public/images/telebot.jpg";
		refreshBanner();
	} else {
		// Display the result in the element with id="time"
		document.getElementById("time").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
	}
}, 1000);

function refreshBanner() {
	// Reload banner gif to force load
	let banner = document.getElementById("bot");
	let src = banner.src;
	banner.src = "";
	banner.src = src;
}
