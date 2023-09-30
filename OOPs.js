function Users (userName, logins, look){

this.userName = userName
this.logins = logins
this.look = look
return this
}

let see1 = new Users ( "pukuu", 2, "cute" )
let see2 = new Users ( "pukii", 3, "cuteyy" )

console.log(see1)
console.log(see2)