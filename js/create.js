console.clear();

function create() {
  const quizCards = document.querySelector('[data-js="cards"]');
  const form = document.querySelector('[data-js="form"]');

  let cards = [];

  form.addEventListener('submit', event => {
    event.preventDefault();
    const questionElement = form.elements.question;
    const answerElement = form.elements.answer;
    const tagsElement = form.elements.tags;

    const newCard = {
      question: questionElement.value,
      answer: answerElement.value,
      tags: tagsElement.value
        .split(',')
        .map(tag => tag.trim())
        .filter(tag => tag.length),
    };
    cards = [newCard, ...cards];
    renderCards();

    form.reset();
    questionElement.focus();
  });

  function renderCards() {
    quizCards.innerHTML = '';
    cards.forEach(card => {
      const cardElement = document.createElement('article');
      cardElement.className = 'card';
      cardElement.innerHTML = `
    <button
              class="card__bookmark"${
                card.isBookmarked ? ' card__active' : ''
              }" }
              data-js="toggleBookmark"
              type="button"
              aria-pressed="false"
            >
              <i class="fa-solid fa-bookmark fa-3x"></i>
            </button>
            <h2 class="card__title">Question</h2>
            <div class="card__question">${card.question}
            </div>
            <div class="card__button">
              <button
                class="card__button--style"
                data-js="show-answer"
                aria-pressed="false"
              >
                Show Answer
              </button>
            </div>
            <p class="card__answer" data-js="card-answer" hidden>${
              card.answer
            }</p>
            <ul class="card__tags--answer" role="list">${card.tags
              .map(tag => ` <li class="card__tags--style">${tag}</li>`)
              .join('')}
            </ul>
    `;
      const section = document.querySelector('[data-js="page-home"]');
      section.append(cardElement);

      const toggleBookmarks = cardElement.querySelector(
        '[data-js="toggleBookmark"]'
      );
      toggleBookmarks.addEventListener('click', () => {
        card.isBookmarked = !card.isBookmarked;
        toggleBookmarks.classList.toggle('card__active');
        console.log(toggleBookmarks);
      });
      const showAnswerButton = cardElement.querySelector(
        '[data-js="show-answer"]'
      );
      const cardAnswer = cardElement.querySelector('[data-js="card-answer"]');

      showAnswerButton.addEventListener('click', () => {
        cardAnswer.toggleAttribute('hidden');
      });
    });
  }
  renderCards();
}

export default create;
