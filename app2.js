jalaliDatepicker.startWatch({
  minDate: "attr",
  maxDate: "attr",
  time: true,
});

// Function to update the total price
document.addEventListener("DOMContentLoaded", function () {
  // Function to update the total price
  function updateTotalPrice() {
    let total = 0;

    // Loop through each item to calculate the total
    document.querySelectorAll(".content li").forEach((item) => {
      const priceElement = item.querySelector(".price-div");
      const qtyElement = item.querySelector(".menuItemQty");

      const price =
        parseInt(priceElement.textContent.trim().replace("T", "")) * 1000; // Extract price, convert to number, and multiply by 1,000
      const qty = parseInt(qtyElement.textContent.trim()); // Extract quantity and convert to number

      total += price * qty; // Calculate total price
    });

    // Update the total price in the DOM
    const totalPriceElement = document.getElementById("TotalPrice");
    totalPriceElement.textContent = total.toLocaleString() + " تومان"; // Display total in the format with thousands separators
  }

  // Add click event listeners for plus and minus buttons
  document.querySelectorAll(".plusBtn").forEach((button) => {
    button.addEventListener("click", function () {
      const qtyElement = this.nextElementSibling;
      let qty = parseInt(qtyElement.textContent.trim());
      qty++; // Increment the quantity
      qtyElement.textContent = qty; // Update the quantity
      updateTotalPrice(); // Recalculate total price
    });
  });

  document.querySelectorAll(".minusBtn").forEach((button) => {
    button.addEventListener("click", function () {
      const qtyElement = this.previousElementSibling;
      let qty = parseInt(qtyElement.textContent.trim());
      if (qty > 0) {
        qty--; // Decrement the quantity, but not below zero
        qtyElement.textContent = qty; // Update the quantity
        updateTotalPrice(); // Recalculate total price
      }
    });
  });
});
