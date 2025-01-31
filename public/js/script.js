const answers = [
	"Are you sure?",
	"Are you really sure??",
	"Are you really realy sure???",
	"Please?",
	"This is animal abuse!",
	"IM CALLING SPCA",
	"PLEASE",
	"I am not going to ask again!",
	"~sad meows~",
	"Why are you doing this to me?",
	"Corner, where are you...",
	"Corner I'm being bullied....",
	"Here lies meow meow meow meow, 2022-2024, a victim of animal abuse. May he rest in peace.... unless you give me another chance?",
];

const no_button = document.getElementById("no-button");
const yes_button = document.getElementById("yes-button");
const no_container = document.getElementById("no-container");
const cat = document.getElementById("cat");
let i = 0;
let size = 50;
let clicks = 0;
let transition = false;

const no_near = () => {
	// Change banner source
	let banner = document.getElementById("banner");
	if (clicks === 0) {
		banner.src = "./public/images/no.gif";
		refreshBanner();
	}
	clicks++;
	incrementYes();
	runAway();
};

no_button.addEventListener("click", (event) => {
	no_near();
});

document.addEventListener("mousemove", function (event) {
	if (transition) {
		return;
	}

	const rect = no_button.getBoundingClientRect();

	// Calculate the center of the element
	const centerX = rect.left + rect.width / 2;
	const centerY = rect.top + rect.height / 2;

	// Calculate the distance from the center of the element to the mouse position
	const distanceX = Math.abs(centerX - event.clientX);
	const distanceY = Math.abs(centerY - event.clientY);

	// Define a proximity threshold (in pixels)
	const threshold = 70;

	// Check if the mouse is within the proximity threshold
	if (distanceX < threshold && distanceY < threshold) {
		// Trigger your event (e.g., change background color)
		transition = true;
		no_near();
	}
});

const incrementYes = () => {
	// increase button height and width gradually to 250px
	const sizes = [40, 50, 30, 35, 45];
	const random = Math.floor(Math.random() * sizes.length);
	size += sizes[random];
	yes_button.style.height = `${size}px`;
	yes_button.style.width = `${size}px`;
	let total = answers.length;
	// change button text
	if (i < total - 1) {
		no_button.innerHTML = answers[i];
		i++;
	} else if (i === total - 1) {
		alert(answers[i]);
		i = 0;
		no_button.innerHTML = "No";
		yes_button.style.height = "50px";
		yes_button.style.width = "50px";
		size = 50;
	}
};

const pythagoresTheorem = (height, width) => {
	return Math.sqrt(height ** 2 + width ** 2);
};

const runAway = () => {
	cat.style.visibility = "visible";
	no_button.style.visibility = "hidden";
	const maxHeight = window.innerHeight - no_container.offsetHeight;
	const maxWidth = window.innerWidth - no_container.offsetWidth;

	// Calculate the distance from the center of the element to the mouse position
	const rect = no_button.getBoundingClientRect();

	// Calculate the center of the element
	const centerX = rect.left + rect.width / 2;
	const centerY = rect.top + rect.height / 2;

	const minDist = pythagoresTheorem(maxHeight * 0.5, maxWidth * 0.5);
	let dist = (randomY = randomX = 0);

	while (dist < minDist) {
		randomY = Math.floor(Math.random() * maxHeight);
		randomX = Math.floor(Math.random() * maxWidth);

		let distanceX = Math.abs(centerX - randomX);
		let distanceY = Math.abs(centerY - randomY);
		dist = pythagoresTheorem(distanceX, distanceY);
	}

	// Angle between horizontal line and new vector
	const angle = Math.atan2(centerY - randomY, centerX - randomX) * (180 / Math.PI) + 180;

	if (angle < 90 || angle > 270) {
		cat.style.transform = `rotate(${angle}deg)`;
	} else {
		cat.style.transform = `scaleY(-1) rotate(-${angle}deg)`;
	}

	no_container.style.position = "absolute"; // Changes the positioning to absolute
	no_container.style.top = randomY + "px"; // Sets the top position
	no_container.style.left = randomX + "px"; // Sets the left position
	no_container.style.transition = "top 1.2s, left 1.2s";

	setTimeout(() => {
		cat.style.visibility = "hidden";
		no_button.style.visibility = "visible";
		transition = false;
	}, 1300);
};

yes_button.addEventListener("click", () => {
	// change banner gif path
	let banner = document.getElementById("banner");
	banner.src = "./public/images/yes.gif";
	refreshBanner();
	// hide buttons div
	let buttons = document.getElementsByClassName("buttons")[0];
	buttons.style.display = "none";
	// show message div
	let message = document.getElementsByClassName("message")[0];
	message.style.display = "block";
});

function refreshBanner() {
	// Reload banner gif to force load
	let banner = document.getElementById("banner");
	let src = banner.src;
	banner.src = "";
	banner.src = src;
}
