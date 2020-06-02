//document.getElementById('uot').innerHTML = 'text';


/*let div = document.querySelector('#uot');//див "типа загаловок"
let par = document.querySelector("#par");//параграф
let par2 = document.querySelector("#vvod");

let but = document.querySelector(".flag");//кнопки
let inpBut = document.querySelector(".inp");
let button = document.querySelector('.tt');

button.onclick = function () {
    console.log('clik');

}

let diva = document.querySelectorAll('.one')
for (let i = 0; i < diva.length; i++) {
    console.log(diva);
    console.log(diva[i]);
    console.log(i);

}



but.onclick = () => {//стрелочная функция, = function () { заменяем на = () => {
    let inp = +document.querySelector('.in').value;//поля ввода(чисел (+))
    let sas = +document.querySelector(".in2").value;
    if (inp > sas) {
        par2.innerHTML = `${inp} больше`;// те эл. которые нужно подставить(вывести числое значение) их заключают в ${},
        // а все заключается в обратные опостофы ...интерполяция , вместо +(конкатенация)
    }
    else if (sas > inp) {
        par2.innerHTML = sas + ' больше';
    }
    else {
        par2.textContent = 'Числа равны';
    }
}

let test = document.createElement('div');
test.classList.add('test');
document.querySelector('#par').appendChild(test);
test.textContent = 'kate the BEST';

let k = 0;

for (let i = 0; i < 6; i++) {
    k++;
    console.log(k);

}

let kn = document.querySelector(".knopka");
kn.onclick = () => {
    par2.innerHTML = k;
}
console.log(document.querySelectorAll('link')[1].getAttribute('href'));*/

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
