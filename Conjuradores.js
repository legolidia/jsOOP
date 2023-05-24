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

    soltarMagia(int, mana, poder){
      if (mana >= int){
        return `Soltou magia com poder ${poder}`
      } else {
        return `Mana insuficiente`
      }
    }
  
 }

