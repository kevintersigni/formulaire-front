document.addEventListener("DOMContentLoaded", () => {
  console.log("Page chargée");

  document
    .querySelector("#contact-form")
    .addEventListener("submit", async (event) => {
      event.preventDefault();

      const data = {
        firstname: document.querySelector("#firstname").value,
        lastname: document.querySelector("#lastname").value,
        email: document.querySelector("#email").value,
        subject: document.querySelector("#subject").value,
        message: document.querySelector("#message").value,
      };

      const response = await axios.post("http://localhost:3000/form", data);
      console.log(response);
    });
});
