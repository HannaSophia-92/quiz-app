function cards() {
  const cardSections = document.querySelectorAll('[data-js="cards"]');

  cardSections.forEach(card => {
    const showAnswerButton = card.querySelector('[data-js="show-answer"]');
  });
}

export default cards;
