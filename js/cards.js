console.clear();

function cards() {
  const quizCards = document.querySelectorAll('[data-js="cards"]');

  quizCards.forEach(card => {
    const toggleBookmarks = card.querySelector('[data-js="toggleBookmark"]');
    const showAnswerButton = card.querySelector('[data-js="show-answer"]');
    const cardAnswer = card.querySelector('[data-js="card-answer"]');
    const hideAnswerTags = card.querySelector('[data-js="hide-answer-tags"]');

    let shownAnswer = true;

    toggleBookmarks.addEventListener('click', () => {
      toggleBookmarks.classList.toggle('card__active');
    });

    showAnswerButton.addEventListener('click', () => {
      cardAnswer.classList.toggle('hidden');
      showAnswerButton.classList.toggle('card__button-hide');
      hideAnswerTags.classList.toggle('hidden');

      if (shownAnswer) {
        showAnswerButton.textContent = 'Hide Answer';
        shownAnswer = false;
      } else {
        showAnswerButton.textContent = 'Show Answer';
        shownAnswer = true;
      }
    });
  });
}

export default cards;
