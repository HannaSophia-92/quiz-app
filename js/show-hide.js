console.clear();

function showAndHideButton() {
  const showAnswerButton = document.querySelector('[data-js="show-answer"]');

  let isShowAnswerPressed = true;

  showAnswerButton.addEventListener('click', () => {
    if (isShowAnswerPressed) {
      showAnswerButton.textContent = 'Hide Answer';
      isShowAnswerPressed = false;
    } else {
      showAnswerButton.textContent = 'Show Answer';
      isShowAnswerPressed = true;
    }
  });
  console.log(isShowAnswerPressed);
}

export default showAndHideButton;
