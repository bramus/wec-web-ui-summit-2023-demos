const positions = ['start', 'end', 'center'];

function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}

function setRandomAlignments() {
	document.body.style.alignContent = positions[getRandomInt(3)];
	document.body.style.justifyContent = positions[getRandomInt(3)];
	document.querySelector('.box').style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

document.body.addEventListener('click', (e) => {
	// TODO: Enable View Transitions
	setRandomAlignments();
});
