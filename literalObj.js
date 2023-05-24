const user = {
  name: "Dju",
  email: "dju@dju.com",
  date: "2001/05/03",
  role: "student",
  showInfos: function() {
    console.log(this.name, this.email);
  }
}

//this: "isso"; "isso" é o objeto que está executando o código, só funciona 
//quando tem um contexto atrelado

const admin = {
  nome: "admin",
  email: "adm@admin.com",
  role: "admin",
  createSomething(){
    console.log("something")
  }
}

//heranca de prototipo **

Object.setPrototypeOf(admin, user)
admin.createSomething()
admin.showInfos()

//__proto__ é o prototipo do objeto, é o objeto que está sendo herdado - construtor do objeto pai