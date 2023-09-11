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

 const form = document.querySelector('#form');
 const weight = document.querySelector('#weight');
 const height = document.querySelector('#height');
 const calculateBtn = document.querySelector('#calculate');
 const clearBtn = document.querySelector('#clear');

 // funções

 // inicialização

 // eventos