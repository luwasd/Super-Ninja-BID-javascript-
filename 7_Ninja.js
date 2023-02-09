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
    drinkSake () {
        this.salud += 10;
    }
}
let ninja1 = new Ninja('Carlos', 25);
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();
ninja1.sayName();