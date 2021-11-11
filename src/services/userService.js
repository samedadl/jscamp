export default class UserService{
    constructor(loggerService){
        this.users = []//getCustomersFromDb()
        this.loggerService = loggerService
    }

    add(user){
        this.users.push(user)
        //console.log("kullanıcı eklendi " + user)
        this.loggerService.log(user)
    }

    list(){
        return this.users
        //console.log("kullanıcılar listelendi")
    }

    getById(id){
        return this.users.find(u=>u.id === id)
        //console.log("kullanıcı detayı getirildi")
    }
}