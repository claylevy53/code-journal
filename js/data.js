/* exported data */

let data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1,
};

window.addEventListener('beforeunload', (e) => {
  const theData = JSON.stringify(data);
  localStorage.setItem('Data', theData);
});

const previousData = localStorage.getItem('Data');

if (previousData !== null) {
  data = JSON.parse(previousData);
}
