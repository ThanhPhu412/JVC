let arr = ['Cell 1 row 1', 'Cell 2 row 1', 'Cell 3 row 1', 'Cell 1 row 2', 'Cell 2 row 2', 'Cell 3 row 2'];
function displayArray() {
    let html = '';
    for(let i = 0; i < arr.length; i++) {
        html += `<div>${arr[i]} <button onclick="deleteRow(${i})">Delete</button></div>`;
    }
    document.getElementById('arrayContainer').innerHTML = html;
}
function deleteRow(index) {
    arr.splice(index, 1);
    displayArray();
}
displayArray();