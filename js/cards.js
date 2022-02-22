console.clear();

function cards() {
  const quizCards = document.querySelectorAll('[data-js="cards"]');

  quizCards.forEach(card => {
    const toggleBookmarks = card.querySelector('[data-js="toggleBookmark"]');
    const showAnswerButton = card.querySelector('[data-js="show-answer"]');
    const cardAnswer = card.querySelector('[data-js="card-answer"]');
    const hideAnswerTags = card.querySelector('[data-js="hide-answer-tags"]');

    let answerShown = true;

    toggleBookmarks.addEventListener('click', () => {
      toggleBookmarks.classList.toggle('card__active');
    });

    showAnswerButton.addEventListener('click', () => {
      cardAnswer.classList.toggle('hidden');
      showAnswerButton.classList.toggle('card__button-hide');
      hideAnswerTags.classList.toggle('hidden');

      if (answerShown == false) {
        showAnswerButton.textContent = 'Hide Answer';
      } else {
        showAnswerButton.textContent = 'Show Answer';
      }
    });
  });
}

export default cards;
