const form = document.getElementById("contact-form");
const statusText = document.getElementById("form-status");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const submitButton = form.querySelector('button[type="submit"]');
  const formData = new FormData(form);

  submitButton.disabled = true;
  submitButton.textContent = "Sending...";
  statusText.textContent = "";
  statusText.className = "";

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (response.ok && data.success) {
      statusText.textContent = "Message sent successfully!";
      statusText.className = "form-success";
      form.reset();
    } else {
      statusText.textContent = data.message || "Something went wrong. Please try again.";
      statusText.className = "form-error";
    }
  } catch (error) {
    statusText.textContent = "Network error. Please try again.";
    statusText.className = "form-error";
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = "Send Message";
  }
});