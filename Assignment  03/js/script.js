const form = document.getElementById("email-form");
const emailInput = document.getElementById("email-input");
const errorMsg = document.getElementById("error-msg");
const formContainer = document.getElementById("form-container");
const infoContainer = document.getElementById("info-container");

const regex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const email = emailInput.value.trim();

  if (!regex.test(email)) {
    errorMsg.style.display = "block";
    return;
  }

  if (email.toLowerCase() === "huyndfx69187@funix.edu.vn") {
    errorMsg.style.display = "none";
    formContainer.classList.add("hidden");
    infoContainer.classList.remove("hidden");
  } else {
    errorMsg.textContent = "Email không tồn tại!";
    errorMsg.style.display = "block";
  }
});

document.querySelectorAll(".info-card").forEach((card) => {
  const btn = card.querySelector(".toggle-btn");
  const content = card.querySelector(".info-content");

  btn.addEventListener("click", () => {
    if (content.classList.contains("hidden")) {
      content.classList.remove("hidden");
      btn.textContent = "View Less";
    } else {
      content.classList.add("hidden");
      btn.textContent = "View More";
    }
  });
});
