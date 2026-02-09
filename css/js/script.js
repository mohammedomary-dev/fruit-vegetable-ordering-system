
let orderList = [];

function addToOrder(item) {
    orderList.push(item);
    displayOrder();
}

function displayOrder() {
    let list = document.getElementById("orderList");
    list.innerHTML = "";

    orderList.forEach(function(item) {
        let li = document.createElement("li");
        li.textContent = item;
        list.appendChild(li);
    });
}

function placeOrder() {
    if (orderList.length === 0) {
        alert("Your order is empty!");
    } else {
        alert("Order placed successfully!");
        orderList = [];
        displayOrder();
    }
}
