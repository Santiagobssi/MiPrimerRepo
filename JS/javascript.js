alert("Hola mundo!");


var num=1;


while(num<=5){
        console.log(num);
        num++;
            
}


for(num=5;num>=0;num--){
console.log(num);
}

//Indicar si un numero es par o impar
for(num=0;num<=5;num++){
if(num%2==0){
console.log("El numero "+num+" es par");
}

else{console.log("El numero "+num+" es impar");}

}


for(num=0;num<=5;num++){
if(num==2||num==4){
console.log("El numero ingresado es 2 o 4");
}

}

//confirm("Excelente primera página con Javascript");

//var respUsuario = confirm();
//respUsuario

var edad = prompt("Cuál es tu edad?");


//Funciones
function sumaCubos(a,b){
    return (a*a*a)+(b*b*b);
    
}

 

//arreglo
var amigos = ["Mayra", "Michelle", "Alanis", "Kelly", "Jeff"];

console.log(amigos);


//archivos json
var datos = {
    nombre:"Santiago",
    apellido:"Samaniego",
    desplegarNombre: function(){
    console.log(datos.nombre+" "+this.apellido);
        return datos.nombre+" "+this.apellido;
    }
}

function() getValue(){
var x= document.getElementById("myHeader").innerHTML=datos.desplegarNombre();

}

//innerHTML pasa a ser la parte que va dentro del h1 >< del html


//console.log(datos.nombre);
//console.log(datos.apellido);
//console.log(datos.desplegarNombre());
//


