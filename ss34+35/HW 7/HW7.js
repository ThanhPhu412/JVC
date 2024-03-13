document.getElementById('addButton').addEventListener('click', function() {
  const table = document.getElementById('myTable');
  const row = table.insertRow(-1);
  for (let i = 0; i < 3; i++) {
      const cell = row.insertCell(i);
      cell.textContent = 'Cell ' + (i + 1) + ' row ' + table.rows.length;
  }
});
