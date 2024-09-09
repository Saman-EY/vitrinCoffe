document.addEventListener("DOMContentLoaded", function () {
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
  const dropdownButtons = document.querySelectorAll(".dropdownButton");

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

  dropdownButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleDropdown(button);
    });

    const checkboxes = button.querySelectorAll(".filterCheckbox");
    const badge = button.querySelector(".OptionGBadge");

    checkboxes.forEach((checkbox) => {
      checkbox.addEventListener("change", () => {
        const checkedCount = button.querySelectorAll(
          ".filterCheckbox:checked"
        ).length;
        badge.textContent = checkedCount;

        badge.style.display = checkedCount > 0 ? "inline-block" : "none";

        const checkImg = checkbox.parentElement.querySelector(".checkImg");
        const uncheckImg = checkbox.parentElement.querySelector(".uncheckImg");
        const span = checkbox.parentElement.querySelector(".CheckboxSpan");

        if (checkbox.checked) {
          checkImg.style.display = "inline";
          uncheckImg.style.display = "none";
          span.classList.add("active");
        } else {
          checkImg.style.display = "none";
          uncheckImg.style.display = "inline";
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

  const firstAccordion = accordionHeaders[0]?.parentElement;
  firstAccordion.classList.add("open");
  firstAccordion.querySelector(".openAccordion").style.display = "none";
  firstAccordion.querySelector(".closeAccordion").style.display = "flex";

  accordionHeaders.forEach((header) => {
    header.addEventListener("click", function () {
      const parentSection = header.parentElement;
      const openBtn = parentSection.querySelector(".openAccordion");
      const closeBtn = parentSection.querySelector(".closeAccordion");

      parentSection.classList.toggle("open");

      if (parentSection.classList.contains("open")) {
        openBtn.style.display = "none";
        closeBtn.style.display = "flex";
      } else {
        openBtn.style.display = "flex";
        closeBtn.style.display = "none";
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
});
