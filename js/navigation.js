console.clear();

function navigation() {
  const pageHome = document.querySelector('[data-js="page-home"]');
  const pageBookmarks = document.querySelector('[data-js="page-bookmarks"]');
  const pageCreate = document.querySelector('[data-js="page-create"]');
  const pageProfile = document.querySelector('[data-js="page-profile"]');

  const buttonHome = document.querySelector('[data-js="button-home"]');
  const buttonBookmarks = document.querySelector(
    '[data-js="button-bookmarks"]'
  );
  const buttonCreate = document.querySelector('[data-js="button-create"]');
  const buttonProfile = document.querySelector('[data-js="button-profile"]');

  buttonHome.addEventListener('click', () => {
    pageHome.classList.remove('hidden');
    pageBookmarks.classList.add('hidden');
    pageCreate.classList.add('hidden');
    pageProfile.classList.add('hidden');
  });

  buttonBookmarks.addEventListener('click', () => {
    pageHome.classList.add('hidden');
    pageBookmarks.classList.remove('hidden');
    pageCreate.classList.add('hidden');
    pageProfile.classList.add('hidden');
  });

  buttonCreate.addEventListener('click', () => {
    pageHome.classList.add('hidden');
    pageBookmarks.classList.add('hidden');
    pageCreate.classList.remove('hidden');
    pageProfile.classList.add('hidden');
  });

  buttonProfile.addEventListener('click', () => {
    pageHome.classList.add('hidden');
    pageBookmarks.classList.add('hidden');
    pageCreate.classList.add('hidden');
    pageProfile.classList.remove('hidden');
  });
}

export default navigation;
