const $photoInput = document.querySelector('#url');
const $titleInput = document.querySelector('#title');
const $notesInput = document.querySelector('#notes');
const $img = document.querySelector('.main-image');
const $form = document.querySelector('form');

$photoInput.addEventListener('input', (e) => {
  $img.setAttribute('src', e.target.value);
});

$form.addEventListener('submit', (e) => {
  e.preventDefault();
  const object = {
    entryID: data.nextEntryId++,
    title: $titleInput.value,
    photoURL: $photoInput.value,
    notes: $notesInput.value,
  };
  data.entries.push(object);
  $img.setAttribute('src', './images/placeholder-image-square.jpg');
  $form.reset();
});
