const positions = ['start', 'end', 'center']

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function setRandomAlignments() {
  document.body.style.alignContent = positions[getRandomInt(3)]
  document.body.style.justifyContent = positions[getRandomInt(3)]
  document.querySelector('.box').style.backgroundColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
}

document.body.addEventListener('click', e => {
  console.log('click');
  if (!document.startViewTransition)
    setRandomAlignments()
  else {
    const transition = document.startViewTransition(() => {
      setRandomAlignments()
    });
    transition.updateCallbackDone.then(() => {
      console.log('updateCallbackDone');
    });
    transition.finished.then(() => {
      console.log('finished');
    });
  }
})
