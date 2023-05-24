import Conjuradores from "./Conjuradores.js";
// num max transformacoes
//trans total

export default class Druida extends Conjuradores {

  #totalTransformacoes;

  constructor(mana, poder, totalTransformacoes){
    super(mana, poder);
    this.#totalTransformacoes = totalTransformacoes;
  }
 
  transformaAnimal(animal){
    if (this.#totalTransformacoes > 0){
    this.#totalTransformacoes -=1 ;
    return `${animal} - ${this.#totalTransformacoes} transformacoes restantes`
  } else {
    return `Sem transformacoes restantes`
  }
  }
}

