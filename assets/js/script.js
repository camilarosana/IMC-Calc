const data = [
    {
      min: 0,
      max: 18.4,
      description: "Menor que 18,5",
      info: "Magreza",
    },
    {
      min: 18.5,
      max: 24.9,
      description: "Entre 18,5 e 24,9",
      info: "Normal",
    },
    {
      min: 25,
      max: 29.9,
      description: "Entre 25,0 e 29,9",
      info: "Sobrepeso",
    },
    {
      min: 30,
      max: 39.9,
      description: "Entre 30,0 e 39,9",
      info: "Obesidade",
    },
    {
      min: 40,
      max: 99,
      description: "Maior que 40,0",
      info: "Obesidade grave",
    },
  ]; 

 const weight = document.querySelector('#weight');
 const height = document.querySelector('#height');
 const calculateBtn = document.querySelector('#calculate');
 const clearBtn = document.querySelector('#clear');
 const form = document.querySelector('#form');
 

 // funções
function cleanInput() {
    weight.value = '';
    height.value = '';
};
function validDigit() {
    return text.replace(/[^0-9,]/g, '');
};
function calcImc(weightInput, heightInput) {
    const imc = (weightInput / (heightInput * heightInput)).toFixed(1);
    return imc;
}

 // eventos
[weight, height].forEach((el)=>{
    el.addEventListener('input',(e)=>{
         const updateValue = validDigit(e.target.value);

         e.target.value = updateValue;
    });
});
calculateBtn.addEventListener('click', (e)=>{
    e.preventDefault();

    const weightInput = +weight.value.replace(',', '.');
    const heightInput = +height.value.replace(',', '.');

    const imc = calcImc(weightInput, heightInput);

    let info = '';
    const value = document.getElementById('value');
    const desc = document.querySelector('#description span');

    data.forEach((item)=>{
        if (imc >= item.min && item.max) {
            info = item.info;
        }
    });
    value.innerText = imc;
    desc.innerText = info;

      switch (info) {
        case "Magreza":
          value.classList.add('attention');
          desc.classList.add('attention');
          break;
          case "Normal":
            value.classList.add('normal');
            desc.classList.add('normal');
            break;
            case "Sobrepeso":
              value.classList.add('attention');
              desc.classList.add('attention');
              break;
              case "Obesidade":
                value.classList.add('attention');
                desc.classList.add('attention');
                break;
                case "Obesidade grave":
                  value.classList.add('attention');
                  desc.classList.add('attention');
                  break;
      }
  
    showResult();
});
function showResult() {
    document.getElementById('infos').classList.remove('hidden');
};

clearBtn.addEventListener('click', (e)=>{
    e.preventDefault();

    document.getElementById('infos').classList.add('hidden');

    cleanInput();
});