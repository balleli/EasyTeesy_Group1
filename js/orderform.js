const TO_ADDRESS = "orders@examplewebsite142.com";

const form = document.querySelector("#order-form");

function buildMailto() {
  const customerName = document.querySelector("#customer-name").value;
  const productName = document.querySelector("#product-name").value;
  const quantity = document.querySelector("#quantity").value;
  const email = document.querySelector("#email").value;
  const address = document.querySelector("#address").value;

  const subject = "New Order: " + productName + " (" + quantity + "x)";
  const body = 
    "Customer Name: " + customerName + "\r\n" +
    "Product: " + productName + "\r\n" +
    "Quantity: " + quantity + "\r\n" +
    "Email: " + email + "\r\n" +
    "Delivery Address: " + address;

  return (
    "mailto:" + TO_ADDRESS +
    "?subject=" + encodeURIComponent(subject) +
    "&body=" + encodeURIComponent(body)
  );
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  window.location.href = buildMailto();
});