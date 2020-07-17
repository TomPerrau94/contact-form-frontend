document.addEventListener("DOMContentLoaded", () => {
  console.log("Document loaded");

  let form = document.querySelector("#contact-form");

  console.log(form);
  document
    .querySelector("#contact-form")
    .addEventListener("submit", async (event) => {
      console.log("coucou1");
      event.preventDefault();
      console.log("coucou2");
      const data = {
        firstname: document.querySelector("#firstname").value,
        lastname: document.querySelector("#lastname").value,
        email: document.querySelector("#email").value,
        subject: document.querySelector("#subject").value,
        message: document.querySelector("#message").value,
      };
      console.log("coucou3");
      console.log(data);
      const response = await axios.post(
        "https://contact-form-backend-tom.herokuapp.com/form",
        data
      );
      console.log(response);
    });
});
