const TO_ADDRESS = "hello@examplewebsite142.com";

const form = document.querySelector("#contact-form");

function buildMailto() {
  const name = document.querySelector("#full-name").value;
  const email = document.querySelector("#email").value;
  const topic = document.querySelector("#topic").value;
  const text = document.querySelector("#message").value;

  const subject = "Website message: " + topic;
  const body =
    "Name: " + name + "\r\n" +
    "Email: " + email + "\r\n\r\n" +
    "Topic: " + topic + "\r\n\r\n" +
    text;

  const mailto = 
    "mailto:" + TO_ADDRESS +
    "?subject=" + encodeURIComponent(subject) +
    "&body=" + encodeURIComponent(body);

  console.log(mailto);
  alert("Message sent! Thank you for reaching out to us. We will get back to you as soon as possible.");

  return mailto;
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  window.location.href = buildMailto();
});