import Conjuradores from "./Conjuradores.js";
import Druida from "./Druida.js";
import Bardo from "./Bardo.js";

const newConjurador = new Conjuradores(51, 50);
const newDruida = new Druida(100, 100, 3);
const newBardo = new Bardo(200, 50, ["musica1", "musica2", "musica3"]);

console.log(newConjurador.soltarMagia(50));
console.log(newDruida.transformaAnimal("gato"));
console.log(newDruida.transformaAnimal("cachorro"));
console.log(newDruida.transformaAnimal("coruja"));
console.log(newDruida.transformaAnimal("lontra"));
newBardo.aprenderMusica("musica 4");
console.log(newBardo.cantarMusica(2));
console.log(newBardo.listaMusica);