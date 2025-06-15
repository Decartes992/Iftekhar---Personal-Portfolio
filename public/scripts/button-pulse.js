function handleClick(event) {
  const button = event.target.closest('button, a.btn');
  if (button) {
    button.classList.add('active-pulse');
    button.addEventListener(
      'animationend',
      () => button.classList.remove('active-pulse'),
      { once: true }
    );
  }
}

document.addEventListener('click', handleClick);
