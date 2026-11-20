const TO_ADDRESS = "orders@examplewebsite142.com";

let chosenSize = "", quantity = 1;

const sizeSelection = document.querySelector(".size-options");

sizeSelection.addEventListener("click", function(event) {
    if (event.target.tagName === "BUTTON") {
        
        chosenSize = event.target.textContent.trim();
        document.querySelectorAll(".size-options button").forEach(function(button) {
            button.classList.remove("selected")
        });
        event.target.classList.add("selected");
    }
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

    if (chosenSize === "") {
        alert("Please select a shirt size first!");
        return;
    }

    const shirtName = document.querySelector(".product-details h1").textContent.trim();
    const shirtPrice = document.querySelector(".product-details h1 + h1").textContent.trim();

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

    window.open(mailto, "_blank");
}

// Make functions accessible to HTML buttons
window.changeQuantity = changeQuantity;
window.orderProduct = orderProduct;
