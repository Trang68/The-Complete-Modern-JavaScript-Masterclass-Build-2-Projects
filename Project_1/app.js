// 1---
// let slider = document.querySelector('.slider');

// slider.addEventListener('input',()=>{
//     console.log(slider.value);
// });


// 2---
let Pslider = document.querySelector('.Pslider');
let Pvalue = document.querySelector('.Pvalue');

let Nslider = document.querySelector('.Nslider');
let Nvalue = document.querySelector('.Nvalue');

let Islider = document.querySelector('.Islider');
let Ivalue1 = document.querySelector('.Ivalue1');


let Ivalue2 = document.querySelector('.Ivalue2');
let PIvalue = document.querySelector('.PIvalue');
let EMIvalue = document.querySelector('.EMIvalue');

Pslider.addEventListener('input',()=>{
    Pvalue.innerHTML = "$" + Pslider.value;
    calculate();
});

Nslider.addEventListener('input',()=>{
    Nvalue.innerHTML = Nslider.value + " Years";
    calculate();
});

Islider.addEventListener('input',()=>{
    Ivalue1.innerHTML = Islider.value + "%";
    calculate();
});

function calculate(){
    let simpleInterest = Pslider.value*Nslider.value * Nslider.value;
    Ivalue2.innerHTML = simpleInterest;

    let totalAmont = parseFloat(Pslider.value) + parseFloat(simpleInterest);
    PIvalue.innerHTML = totalAmont;

    let months = parseInt(Nslider.value)*12;
    let EMI = parseInt(totalAmont/months);

    EMIvalue.innerHTML = EMI;

}
