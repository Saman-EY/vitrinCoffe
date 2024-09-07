///////// mobile offcanvas
const openButton = document.querySelector("#OpenMobileOffcanvas"); // Your open button
const closeButton = document.querySelector("#closeMobileOffcanvas"); // Close button inside off-canvas
const overlay = document.querySelector(".offcanvasOverlay");
const offcanvas = document.querySelector(".MobileOffcanvas");

function openOffcanvas() {
  overlay.classList.add("show");
  offcanvas.classList.add("show");
}

function closeOffcanvas() {
  overlay.classList.remove("show");
  offcanvas.classList.remove("show");
}

openButton.addEventListener("click", openOffcanvas);
closeButton.addEventListener("click", closeOffcanvas);
overlay.addEventListener("click", closeOffcanvas);
// mobile offcanvas end

//////// list filter
// Select all dropdown buttons
const dropdownButtons = document.querySelectorAll(".dropdownButton");

// Function to handle dropdown toggle and badge update
function toggleDropdown(button) {
  const dropdownMenu = button.querySelector(".ListFilterDropDown");

  // Close all other dropdowns
  dropdownButtons.forEach((btn) => {
    const menu = btn.querySelector(".ListFilterDropDown");
    if (menu !== dropdownMenu) {
      menu.style.display = "none";
    }
  });

  // Toggle the current dropdown
  dropdownMenu.style.display =
    dropdownMenu.style.display === "flex" ? "none" : "flex";
}

// Add event listeners to all dropdown buttons
// Add event listeners to all dropdown buttons
dropdownButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleDropdown(button);
  });

  // Find the checkboxes and badge within the same dropdown
  const checkboxes = button.querySelectorAll(".filterCheckbox");
  const badge = button.querySelector(".OptionGBadge");

  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      const checkedCount = button.querySelectorAll(
        ".filterCheckbox:checked"
      ).length;
      badge.textContent = checkedCount; // Update the badge with the count

      // Show or hide the badge based on the count
      badge.style.display = checkedCount > 0 ? "inline-block" : "none";

      // Show check or uncheck image based on checkbox state
      const checkImg = checkbox.parentElement.querySelector(".checkImg");
      const uncheckImg = checkbox.parentElement.querySelector(".uncheckImg");
      const span = checkbox.parentElement.querySelector(".CheckboxSpan");

      if (checkbox.checked) {
        checkImg.style.display = "inline"; // Show check image
        uncheckImg.style.display = "none"; // Hide uncheck image
        span.classList.add("active");
      } else {
        checkImg.style.display = "none"; // Hide check image
        uncheckImg.style.display = "inline"; // Show uncheck image
        span.classList.remove("active");
      }
    });
  });
});

// Close dropdown menus when clicking outside
document.addEventListener("click", (e) => {
  dropdownButtons.forEach((button) => {
    const dropdownMenu = button.querySelector(".ListFilterDropDown");
    if (!button.contains(e.target)) {
      dropdownMenu.style.display = "none";
    }
  });
});

/////////////////// LIST FILTER END

/////////////////////// ACCORDION
const accordionHeaders = document.querySelectorAll(".AccordionHeader");

// Open the first accordion on page load
const firstAccordion = accordionHeaders[0].parentElement; // Get the first <section> element
firstAccordion.classList.add("open"); // Add the 'open' class
firstAccordion.querySelector(".openAccordion").style.display = "none"; // Hide open button
firstAccordion.querySelector(".closeAccordion").style.display = "flex"; // Show close

accordionHeaders.forEach((header) => {
  header.addEventListener("click", function () {
    const parentSection = header.parentElement; // Get the parent <section> element
    const openBtn = parentSection.querySelector(".openAccordion"); // Select the open button
    const closeBtn = parentSection.querySelector(".closeAccordion"); // Select the close button

    parentSection.classList.toggle("open"); // Toggle the 'open' class

    // Toggle visibility of buttons
    if (parentSection.classList.contains("open")) {
      openBtn.style.display = "none"; // Hide open button
      closeBtn.style.display = "flex"; // Show close button
    } else {
      openBtn.style.display = "flex"; // Show open button
      closeBtn.style.display = "none"; // Hide close button
    }

    // Close other accordions if needed (optional)
    // document.querySelectorAll(".AccordionSec").forEach((section) => {
    //   if (section !== parentSection) {
    //     section.classList.remove("open");
    //     section.querySelector(".openAccordion").style.display = "flex";
    //     section.querySelector(".closeAccordion").style.display = "none";
    //   }
    // });
  });
});

//// //ACCORDION END
