document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".preview__form");
    form.addEventListener("submit", formSend);
  
    function formSend(e) {
      e.preventDefault();
  
      let formData = new FormData(form);
      formData.append("project_name", window.location.href);
      formData.append("admin_email", "myavtoskola@gmail.com");
      formData.append("form_subject", "Форма записи на курсы");
  
      fetch("https://avtoskola.by/mail/mail.php", {
        method: "POST",
        mode: "no-cors",
  
        // Adding body or contents to send
        body: JSON.stringify(Object.fromEntries(formData)),
  
        // Adding headers to the request
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });
      alert("Ваша заявка принята, скоро мы Вам перезвоним");
      form.reset();
    }
});