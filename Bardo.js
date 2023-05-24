import Conjuradores from "./Conjuradores.js";

export default class Bardo extends Conjuradores {
  #listaMusica = [];

  constructor(mana, poder, listaMusica){
    super(mana, poder);
    this.#listaMusica = listaMusica;
  }
get listaMusica(){
  return this.#listaMusica;
}

set listaMusica(listaMusica){
  this.#listaMusica = listaMusica;
}

aprenderMusica(musica){
  this.#listaMusica.push(musica);
  }

cantarMusica(index){
    return `Cantou musica ${this.#listaMusica[index]}`
    }

}
