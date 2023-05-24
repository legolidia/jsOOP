import Conjuradores from "./Conjuradores.js";
// num max transformacoes
//trans total

export default class Druida extends Conjuradores {

  totalTransformacoes;

  constructor(mana, poder, totalTransformacoes){
    super(mana, poder);
    this.totalTransformacoes = totalTransformacoes;
  }
 
  transformaAnimal(animal){
    this.totalTransformacoes -=1 ;
    return `${animal} - ${this.totalTransformacoes} transformacoes restantes`
  }

}

