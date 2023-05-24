// function User(name, email){
//   this.name = name
//   this.email = email

//   this.showInfos = function(){
//     return `${this.name}, ${this.email}`
//   }
// }

// //const newUser = new User("Dju", "dju@dju.com")
// //console.log(newUser.showInfos())

// function Admin(role){
//   User.call(this, "Dju", "dju@dju.com")
//   this.role = role || "student"
// }

// Admin.prototype = Object.create(User.prototype)
// const newUser = new Admin('admin')
// console.log(newUser.showInfos())
// console.log(newUser.role)

const user = {
  showInfos : function(name){
    return name
  }
}

const newUser = Object.create(user)
newUser.init("Dju", "dju@dju.com")
console.log(newUser.showInfos("Dju"))

// console.log(user.isPrototypeOf(newUser)) //true

