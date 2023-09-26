const sentences = ['Hello people!', 'How are you today?', 'All good?', 'What a day huh?'];
let index = 0;
const nextSentence = () => {
	document.querySelector('p').innerText = sentences[++index % sentences.length];
};

document.addEventListener('click', (e) => {
	// TODO: Enable View Transitions
	nextSentence();
});
