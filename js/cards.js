console.clear();

const quizCards = document.querySelectorAll('[data-js="cards"]');

const cardSet = [
  {
    question: 'Which two nations share the longest border in the world?',
    answer:
      'Canada and the United States share the longest land border in the world. Canada - America: 8.893km.',
    tags: ['world', 'mix'],
  },
  {
    question: 'What is the nickname of Japan?',
    answer: 'The Land of the rising sun.',
    tags: ['world', 'mix'],
  },
];

function renderCards() {
  quizCards.innerHTML = '';
  cardSet.forEach(card => {
    const cardElement = document.createElement('article');
    cardElement.className = 'card';
    cardElement.innerHTML = `
  <button
            class="card__bookmark"${card.isBookmarked ? ' card__active' : ''}" }
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

export { cards, renderCards };
