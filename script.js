document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("callbackForm");
  const message = document.getElementById("message");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    message.textContent =
      "Thank you! Your callback request has been received. Our travel agent will contact you shortly.";

    message.style.color = "#008000";
    form.reset();
  });
});
