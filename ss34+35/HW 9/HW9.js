let items = ['Nguyễn Văn A', 'Vũ Thị B', 'Nguyễn Minh C'];
let currentItem = null;

function displayItems() {
    let html = '';
    for (let i = 0; i < items.length; i++) {
        html += `<div>${items[i]} <button onclick="editItem(${i})">Edit</button></div>`;
    }
    document.getElementById('listContainer').innerHTML = html;
}

function editItem(index) {
    currentItem = index;
    document.getElementById('editInput').value = items[index];
    document.getElementById('editContainer').style.display = 'block';
}

function saveEdit() {
    items[currentItem] = document.getElementById('editInput').value;
    document.getElementById('editContainer').style.display = 'none';
    displayItems();
}

displayItems();
