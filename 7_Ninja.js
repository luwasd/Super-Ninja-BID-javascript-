class Ninja {
    constructor(nombre, salud, velocidad = 3, fuerza = 3) {
        this.nombre = nombre;
        this.salud = salud;
        this.velocidad = velocidad;
        this.fuerza = fuerza;
    }
    sayName() {
        console.log("El nombre del Ninja es: " + this.nombre);
    }
    showStats() {
        console.log("Nombre: " + this.nombre + " Fuerza: " + this.fuerza + " Velocidad: " + this.velocidad + " Salud: " + this.salud);
    }
    drinkSake() {
        this.salud += 10;
    }
}
class Sensei extends Ninja {
    constructor(nombre, sabiduria = 10, salud = 200, velocidad = 10, fuerza = 10) {
        super(nombre, salud, velocidad, fuerza);
        this.sabiduria = sabiduria;
    }
    showStats() {
        console.log("Nombre: " + this.nombre + " Sabiduria: " + this.sabiduria + " Fuerza: " + this.fuerza + " Velocidad: " + this.velocidad + " Salud: " + this.salud);
    }
    speakWisdom() {
        this.drinkSake();
        console.log('Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses.');
    }
}
let ninja1 = new Ninja('Carlos', 25);
let superSensei = new Sensei('Splinter');
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();
ninja1.sayName();
superSensei.sayName();
superSensei.showStats();
superSensei.speakWisdom();
superSensei.showStats();