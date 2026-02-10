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


if(num1===num2 && num2===num3 & num1===num3){
    console.log("Todos los números son iguales");
}else{
    if (num1 >= num2 && num1 >= num3) {
            mayor = num1;
            if (num2 >= num3) {
                medio = num2;
                menor = num3;
            } else {
                medio = num3;
                menor = num2;
            }
        } else if (num2 >= num1 && num2 >= num3) {
            mayor = num2;
            if (num1 >= num3) {
                medio = num1;
                menor = num3;
            } else {
                medio = num3;
                menor = num1;
            }
        } else {
            mayor = num3;
            if (num1 >= num2) {
                medio = num1;
                menor = num2;
            } else {
                medio = num2;
                menor = num1;
            }
        }
}

let listaMayorAMenor = []
listaMayorAMenor.push(mayor)
listaMayorAMenor.push(medio)
listaMayorAMenor.push(menor)
console.log(`Lista de mayor a menor: ${listaMayorAMenor}`);

listaMenorAMayor = []
listaMenorAMayor.push(menor)
listaMenorAMayor.push(medio)
listaMenorAMayor.push(mayor)
console.log(`Lista de menor a mayor : ${listaMenorAMayor}`);








