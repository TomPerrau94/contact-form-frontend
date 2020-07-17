document.addEventListener("DOMContentLoaded", () => {
  console.log("Document loaded");

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
      console.log(data);
      const response = await axios.post("https://56c471b6ace3.ngrok.io", data);
      console.log(response);
    });
});
