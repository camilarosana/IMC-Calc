const form = document.getElementById('form');

form.addEventListener("submit", function(e){
    e.preventDefault();

    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    const calcImc = (weight / (height * height)).toFixed(2);

    const value = document.getElementById('value');
    let description = '';

    document.getElementById('infos').classList.remove('hidden');

    if (calcImc < 18.5) {
        description = 'Cuidado! Você está abaixo do peso.'
    } else if (calcImc >= 18.5 && calcImc <= 25) {
        description = "Você está no peso ideal.";
    } else if (calcImc > 25 && calcImc <= 30) {
        description = "Cuidado! Você está com sobrepeso.";
    } else if (calcImc > 30 && calcImc <= 35) {
        description = "Cuidado! Você está com obesidade moderada.";
    } else if (calcImc > 35 && calcImc <= 40) {
        description = "Cuidado! Você está com obesidade severa.";
    } else {
        description = "Cuidado! Você está com obesidade morbida!";
    }


    value.textContent = calcImc;
    document.getElementById('description').textContent = description;


});
