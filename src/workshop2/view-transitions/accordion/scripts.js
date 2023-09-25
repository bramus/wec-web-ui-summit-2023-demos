document.querySelectorAll('.item input').forEach(($input) => {
	// @note: we listen on click because that happens *before* a change event
	$input.addEventListener('click', async (e) => {
		if (!document.startViewTransition) return;

		e.preventDefault();

		const t = document.startViewTransition(() => {
			e.target.checked = true;
		});

		await t.finished;
		console.log('done');
	});
});
