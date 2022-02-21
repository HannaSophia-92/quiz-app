function counter() {
  const counterQuestion = document.querySelector(
    '[data-js="counter-question"]'
  );
  const textareaQuestion = document.querySelector(
    '[data-js="textarea-question"]'
  );

  const counterAnswer = document.querySelector('[data-js="counter-answer"]');
  const textareaAnswer = document.querySelector('[data-js="textarea-answer"]');

  textareaQuestion.addEventListener('input', () => {
    const questionLength = textareaQuestion.value.length;
    const maxTextLength = textareaQuestion.maxLength;
    counterQuestion.innerText = maxTextLength - questionLength;
  });

  textareaAnswer.addEventListener('input', () => {
    counterAnswer.innerText =
      textareaAnswer.maxLength - textareaAnswer.value.length;
  });
}

export default counter;
