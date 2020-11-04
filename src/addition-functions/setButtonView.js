function setButtonView (button, name) {
  if (button) {
    button.classList.add(name);
    setTimeout(() => {
      button.classList.remove(name);
    }, 3000);
  }
}

export default setButtonView;