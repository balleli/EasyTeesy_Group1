const TO_ADDRESS = "orders@examplewebsite142.com";
let chosenSize = "", quantity = 1;

const sizeSelection = document.querySelector(".size-options");
    if (event.target.tagName === "BUTTON") {
    sizeSelection.addEventListener("click", function(event) {
    chosenSize = event.target.textContent,trim();
    alert("Your chosen size: " + chosenSize);
});

document.querySelector("#quantity").textContent = quantity;
function changeQuantity(change) {
    quantity = quantity + change;
    if (quantity < 1) {
        quantity = 1;
    }

    document.querySelector("#quantity").textContent = quantity;
}

function orderProduct() {

    const shirtName = document.querySelector(".product-details h1").textContent;
    const shirtPrice = document.querySelector(".product-details h1 + h1").textContent;

    const subject = "Order Summary";
    const body =
        "Product: " + shirtName + "\r\n" +
        "Price: " + shirtPrice + "\r\n" +
        "Size: " + chosenSize + "\r\n" +
        "Quantity: " + quantity;

    const mailto =
        "mailto:" + TO_ADDRESS +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(body);

    window.location.href = mailto;
}

window.changeQuantity = changeQuantity;
window.orderProduct = orderProduct;

