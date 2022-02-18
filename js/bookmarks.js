function bookmarks() {
  const toggleBookmarks = document.querySelectorAll(
    '[data-js="toggleBookmark"]'
  );

  toggleBookmarks.forEach(button => {
    button.addEventListener('click', () => {
      button.classList.toggle('card__active');
    });
  });
}

export default bookmarks;
