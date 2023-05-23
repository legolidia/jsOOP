const user = {
  name: "Dju",
  email: "dju@dju.com",
  date: "2001/03=5/03",
  role: "admin",
  active: true,
  showInfos: function() {
    console.log(this.name, this.email, this.date);
  }
}

user.showInfos()
//heranca de prototipo