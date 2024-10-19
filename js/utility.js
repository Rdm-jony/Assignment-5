// helper function
let counts = 0;

const items = [];
function itemArray(item) {

    items.push(item)
}

function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
}

function setCouponCode(grandTotal) {
    setInnerText("grand-total", grandTotal)
    document.getElementById("coupon-container").classList.add("hidden");
    document.getElementById("coupon-msg").classList.remove("hidden");
}
// main funtion

function addselectedColor(event) {
    const id = event.target.innerText;
    if (items.includes(id)) {
        return true;
    }
    itemArray(id)
    console.log(items)
    document.getElementById(id).classList.add("bg-primary-color", "text-white");
    counts++;

}
function countTotalTicket() {
    // let currentTicket = parseIntFun("total-ticket");
    let currentTicket = counts;
    setInnerText("total-ticket", currentTicket)
    totalReaminingTicket()
}
function totalReaminingTicket() {

    setInnerText("remaining-seat", (40 - counts))

}
function addedSeat(event) {
    const seatName = event.target.innerText;
    const parent = document.getElementById("added-seat");
    const element = document.createElement("div");
    element.classList.add("flex", "justify-between", "mb-2")
    element.innerHTML = `<p>${seatName}</p>
                        <p>Economoy</p>
                         <p>550</p>`;
    parent.appendChild(element);
}

function totalTaka() {
    const totalTaka = counts * 550;
    setInnerText("total", totalTaka);
    setInnerText("grand-total", totalTaka)
}

function enableNextButton() {
    const phoneNumber = document.getElementById("phone-number").addEventListener("keyup", (e) => {
        if (e.target.value != "" && counts > 0) {
            document.getElementById("next-button").removeAttribute("disabled")
        }
    });

}

function enableCouponBtn() {
    document.getElementById("coupon-btn").removeAttribute("disabled");

}
function couponBtn() {
    const couponCode = document.getElementById("coupon-input").value;
    if (couponCode == "NEW15") {
        const grandTotal = (counts * 550) - (counts * 550) * 0.15;
        setCouponCode(grandTotal);

    }
    else if (couponCode == "Couple 20") {
        const grandTotal = (counts * 550) - (counts * 550) * 0.20;
        setCouponCode(grandTotal)

    }
    else {
        document.getElementById("error-toast3").classList.remove("hidden")
    }

}