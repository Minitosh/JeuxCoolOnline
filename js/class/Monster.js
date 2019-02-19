import Actor from "./Actor.js"

export default class Monster extends Actor {
    constructor(name, strength, pv, image) {
        super(name, strength, pv, image); // appelle le constructeur parent avec le paramètre
        window.alert("Monstre créé !");
    }



    fight() {
        window.alert("fight-Monster");
    }
}