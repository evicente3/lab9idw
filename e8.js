let numero=prompt("ingrese un rango de numeros para encontrar los primos");
for (let i=0;i<numero;i++){
    let resto=numero%2;
    if (resto==0){
        console.log((numero)+" es un numero par");
        }
    else {
        console.log(numero+ " es impar");
    }
}