document.getElementById('addButton').addEventListener('click', function() {
  const inputElement = document.getElementById('myInput');
  const listElement = document.getElementById('myList');
  const listItem = document.createElement('li');
  listItem.textContent = inputElement.value;
  listElement.appendChild(listItem);
  inputElement.value = '';
});
