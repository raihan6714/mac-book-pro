// Button id select
const memory1 = document.getElementById('memory-8GB');
const memory2 = document.getElementById('memory-16GB');
const storage1 = document.getElementById('storage-8GB');
const storage2 = document.getElementById('storage-512GB');
const storage3 = document.getElementById('storage-1TR');
const free = document.getElementById('free');
const paid = document.getElementById('paid');
const bestPrice = document.getElementById('best-price');
const memoeyCost = document.getElementById('memoey-cost');
const storageCost = document.getElementById('storage-cost');
const deliveryCost = document.getElementById('delivery-cost');
const totalCost = document.getElementById('total-cost');
const pomoCodeBtn = document.getElementById('pomo-btn');
const grandTotal = document.getElementById('grand-total');
//selected class add
function isContain(elem) {
    //return is class presant
    return elem.classList.contains("selected");
}
// update total
function updateTotal() {
    const bestP = Number(bestPrice.innerText);
    const memoryC = Number(memoeyCost.innerText);
    const storageC = Number(storageCost.innerText);
    const deliveryC = Number(deliveryCost.innerText);
    let totalP = bestP + memoryC + storageC + deliveryC;
    totalCost.innerText = totalP;
    //bonous part 1
    grandTotal.innerText = totalP;
    return totalP;
}
//memory cost
memory1.addEventListener('click', function () {
    if (!isContain(memory1)) {
        memory1.classList.add("selected");
        memory2.classList.remove("selected");
    }
    memoeyCost.innerText = "0";
    updateTotal();
});
memory2.addEventListener('click', function () {
    if (!isContain(memory2)) {
        memory2.classList.add("selected");
        memory1.classList.remove("selected");
    }
    memoeyCost.innerText = "180";
    updateTotal();
});
//storage cost
storage1.addEventListener('click', function () {
    if (!isContain(storage1)) {
        storage1.classList.add("selected");
        storage2.classList.remove("selected");
        storage3.classList.remove("selected");
    }
    storageCost.innerText = "0";
    updateTotal();
});
storage2.addEventListener('click', function () {
    if (!isContain(storage2)) {
        storage2.classList.add("selected");
        storage1.classList.remove("selected");
        storage3.classList.remove("selected");
    }
    storageCost.innerText = "100";
    updateTotal();
});
storage3.addEventListener('click', function () {
    if (!isContain(storage3)) {
        storage3.classList.add("selected");
        storage2.classList.remove("selected");
        storage1.classList.remove("selected");
    }
    storageCost.innerText = "180";
    updateTotal();
});
//delivery cost
free.addEventListener('click', function () {
    if (!isContain(free)) {
        free.classList.add("selected");
        paid.classList.remove("selected");
    }
    deliveryCost.innerText = "0";
    updateTotal();
});
paid.addEventListener('click', function () {
    if (!isContain(paid)) {
        paid.classList.add("selected");
        free.classList.remove("selected");
    }
    deliveryCost.innerText = "20";
    updateTotal();
});
//pomo code
pomoCodeBtn.addEventListener('click', function () {
    const pomoCodeInput = document.getElementById('pomo_input');
    const pomoCode = pomoCodeInput.value;
    const secretCode = "stevekaku";
    if (secretCode == pomoCode) {
        var totalPrice = document.getElementById('total-cost');
        var grandTotalPrice = document.getElementById('grand-total');
        const totalPriceValue = Number(totalPrice.innerText);
        const pomoDiscount = (totalPriceValue * 20) / 100;
        const pomo = totalPriceValue - pomoDiscount;
        // update grand total price
        grandTotalPrice.innerText = pomo;
        // disable button
        document.getElementById('pomo-btn').disabled = true;
        // clear input field
        pomoCodeInput.value = '';
    }
});