import Conjuradores from "./Conjuradores.js";
import Druida from "./Druida.js";
import Bardo from "./Bardo.js";

const newConjurador = new Conjuradores(100, 50);
const newDruida = new Druida(100, 100, 3);
const newBardo = new Bardo(200, 50, ["musica1", "musica2", "musica3"]);

console.log(newConjurador.soltarMagia(50, newConjurador.mana, newConjurador.poder));
console.log(newDruida.transformaAnimal("lobo"));
newBardo.aprenderMusica("musica 4");
console.log(newBardo.cantarMusica(2));
