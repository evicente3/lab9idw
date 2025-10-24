console.log("ingrese 1 para calcular el area de un circulo ")
console.log("ingrese 2 para calcular el area de un rectangulo")
console.log("ingrese 3 para salir")
let numero=prompt("ingrese su opcion");
let activacion=true;
do{
switch (numero){
    case 1:
        console.log("Calculo de area de un circulo");
        let radio=prompt("ingrese el radio");
        let areacirculo=Math.pow(radio,2)*Math.PI;
        console.log("el area del circulo de radio "+(radio)+" es : "+(areacirculo))
    case 2:
        console.log("Calculo de area de un rectangulo");
        let largo=prompt("ingrese el largo ");
         let ancho=prompt("ingrese el ancho ");
        let arearectangulo=largo*ancho;
        console.log("el area del rectangulo con largo "+(largo)+" y ancho  "+(ancho)+" es :"+(arearectangulo));
    case 3:
        console.log("saliendo del menu")
         activacion=false;
}
} while(activacion==true);