const sentences = ['Hello people!', 'How are you today?', 'All good?', 'What a day huh?'];
let index = 0;
const nextSentence = () => {
	document.querySelector('p').innerText = sentences[++index % sentences.length];
};

document.addEventListener('click', (e) => {
	if (!document.startViewTransition) {
		nextSentence();
		return;
	}

	document.startViewTransition(() => {
		nextSentence();
	});
});
