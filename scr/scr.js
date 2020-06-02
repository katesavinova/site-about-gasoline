let gas = document.querySelectorAll('.gas');
let parag = document.getElementById('parag');
for (let i = 0; i < gas.length; i++) {
    gas[i].onclick = function () {
        let pole = document.querySelector('.pole').value;
        console.log(pole);
        let price = this.getAttribute("data");
        console.log(price);
        parag.innerHTML = (price * pole + 'rub');

    }
}
