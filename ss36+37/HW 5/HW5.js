function addItem() {
  const itemInput = document.getElementById("itemInput");
  const itemList = document.getElementById("itemList");

  const newItem = itemInput.value;
  if (newItem) {
      const li = document.createElement("li");
      li.textContent = newItem;
      itemList.appendChild(li);
      itemInput.value = "";
      itemInput.style.backgroundColor = "white";
  } else {
      itemInput.style.backgroundColor = "yellow";
  }
}