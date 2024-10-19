
function book(event) {

    if (counts > 3) {
        document.getElementById("error-toast1").classList.remove("hidden")
    }
    else {
        const duplicatee = addselectedColor(event);
        if (counts == 4) {

            enableCouponBtn()
        }
        if (duplicatee) {
            document.getElementById("error-toast2").classList.remove("hidden")
        } else {
            document.getElementById("error-toast2").classList.add("hidden")
            countTotalTicket();
            addedSeat(event);
            totalTaka();
            enableNextButton()
        }
    }
};
