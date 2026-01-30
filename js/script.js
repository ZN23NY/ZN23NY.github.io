document.addEventListener("DOMContentLoaded", function () {
  // Xử lý form email
  const emailForm = document.getElementById("email-form");
  const emailInput = document.getElementById("email-input");
  const infoContainer = document.getElementById("info-container");

  emailForm.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!emailInput.checkValidity()) {
      emailInput.classList.add("is-invalid");
      return;
    }

    emailInput.classList.remove("is-invalid");
    emailInput.classList.add("is-valid");

    // Ẩn form
    document.getElementById("form-container").classList.add("d-none");

    // Hiện thông tin cá nhân ở đúng vị trí đó
    infoContainer.classList.remove("d-none");
  });

  emailInput.addEventListener("input", function () {
    if (emailInput.validity.valid) {
      emailInput.classList.remove("is-invalid");
    } else {
      emailInput.classList.add("is-invalid");
    }
  });

  // Xử lý các nút “View More”
  const toggleButtons = document.querySelectorAll(".toggle-btn");
  toggleButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      const content = this.nextElementSibling;
      if (content) {
        content.classList.toggle("d-none");
        this.textContent = content.classList.contains("d-none")
          ? "View More"
          : "View less";
      }
    });
  });
});
