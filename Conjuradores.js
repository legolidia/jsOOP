 export default class Conjuradores {
  #mana
  #poder
  
    constructor(mana, poder){
      this.#mana = mana
      this.#poder = poder
    }

    get mana(){
      return this.#mana
    }

    get poder(){
      return this.#poder
    }

    set mana(newMana){
      this.#mana = newMana
    }

    set poder(poder){
      this.#poder = poder
    }


    soltarMagia(int){
      if (this.#mana >= int){
        this.#mana -= int
        return `Sobrou ${this.#mana} de mana`
      } else {
        return `Mana insuficiente`
      }
    }
  
 }

