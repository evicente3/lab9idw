let pares=0;
let impares=0;
for (let i=0;i<10;i++){
   let numeros = prompt("ingrese el numero:"+(i));
   let resto = numeros%2;
   if (resto == 0){
     pares+=1;
   }
   else {
    impares+=1;
   }
}
console.log("hubieron "+(pares)+" numeros pares")
console.log("hubieron "+(impares)+" numeros impares")