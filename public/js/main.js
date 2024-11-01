document.addEventListener("DOMContentLoaded", () => {
  const quantityInput = document.getElementById("quantity");
  const itemsDiv = document.getElementById("items");

  quantityInput.addEventListener("input", () => {
    const quantity = quantityInput.value;
    fetch(`/items?quantity=${quantity}`)
      .then((response) => response.text())
      .then((html) => {
        itemsDiv.innerHTML = html;
      });
  });
});
