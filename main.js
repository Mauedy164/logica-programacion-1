const listaNumeros = []

let mayor = 0;
let medio = 0;
let menor = 0;

let num1 = Number(prompt('Ingresa el primer número'))
listaNumeros.push(num1)
let num2 = Number(prompt('Ingresa el segundo número'))
listaNumeros.push(num2)
let num3 = Number(prompt('Ingresa el tercer número'))
listaNumeros.push(num3)

mayor = Math.max(num1,num2,num3)
menor = Math.min(num1,num2,num3)



for (let i =0 ; i<listaNumeros.length; i++){
    if(listaNumeros[i] !== mayor && listaNumeros[i]!== menor){
        medio = listaNumeros[i]
    }
}

console.log(mayor);
console.log(medio);
console.log(menor);


function MayorAMenor(listaNumeros) {
  let n = listaNumeros.length;
  
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - 1; j++) {
      if (listaNumeros[j] < listaNumeros[j + 1]) {
        let temp = listaNumeros[j];
        listaNumeros[j] = listaNumeros[j + 1];
        listaNumeros[j + 1] = temp;
      }
    }
  }
  return listaNumeros;
}

let mayorAMenor = MayorAMenor(listaNumeros)
let menorAMayor = [mayorAMenor].reverse()
console.log(`Lista de mayor a menor ${mayorAMenor}`);
console.log(`Lista de menor a mayor ${menorAMayor}`);



