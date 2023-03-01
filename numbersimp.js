// 1) Crear un algoritmo que muestre los números impares entre el 0 y el 100.
function mostrarImpares () {
    for (let i = 0; i <= 100; i++) {
        if(i % 2 !== 0){
            console.log(i)
        }
    }
}

mostrarImpares();




// 2) Realizar un programa que ingrese los sueldos de 5 operarios en un vector. Realizar la creación y carga del vector en el constructor. Crear un método para imprimir el vector.

//  Realizado en archivo index.html




// 3) Plantear una clase llamada Alumno y definir como atributos su nombre y su edad. En el constructor realizar el ingreso de datos. Definir otros dos métodos para imprimir los datos ingresados y un mensaje si es mayor o no de edad (edad >= 18)

class Alumno {
    constructor(nombre, edad) {
        this.nombre = nombre,
        this.edad = edad
    }
}

Alumno.prototype.printDates = function() {
    console.log(`Nombre: ${this.nombre} | Edad: ${this.edad}`);
}

Alumno.prototype.validarEdad = function() {
    if(this.edad >= 18){
        console.log(`El alumno ${this.nombre} es mayor de edad`)
    }else{
        console.log(`El alumno ${this.nombre} es menor de edad`)
    }
}

const alumno1 = new Alumno('Gabriel', 15)
alumno1.printDates();
alumno1.validarEdad();

const alumno2 = new Alumno('Lujan', 20)
alumno2.printDates();
alumno2.validarEdad();




