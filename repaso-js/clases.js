class Car {

    constructor(modelo, velocidad, ensamblaje){

        this.modelo = modelo;
        this.velocidad = velocidad;
        this.ensamblaje = ensamblaje;

    }

    aumentarVelocidad(){

        this.velocidad += 1;

    }

    reducirVelocidad(){

        this.velocidad -= 1;

    }

}
class Bus extends Car{

    constructor(modelo, velocidad, ensamblaje){

        super(modelo, velocidad, ensamblaje);
        this.altura = 5;
    }

    mostrarAltura(){
        
        return "La altura es: " + this.altura;
    }

}
var bus1 = new Bus('Ford', 240, 2024);
document.writeln(bus1.mostrarAltura());


var coche1 = new Car('Bmw', 200, 2017);
var coche2 = new Car('Toyota', 190, 2005);
var coche3 = new Car('Chevrolet', 220, 2004);
var coche4 = new Car('Dodge', 240, 2024);
document.writeln("<h1> velocidad: " + coche2.velocidad + "</h1>");
coche2.aumentarVelocidad();
coche2.aumentarVelocidad();
coche2.aumentarVelocidad();
coche2.aumentarVelocidad();
coche2.aumentarVelocidad();
document.writeln("<h1> velocidad: " + coche2.velocidad + "</h1>");