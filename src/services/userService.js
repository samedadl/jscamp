import { users } from "../data/users.js"
import DataError from "../models/dataError.js"

export default class UserService {
    constructor(loggerService) {
        //this.users = []//getCustomersFromDb()
        this.employees = []
        this.customers = []
        this.errors = []
        this.loggerService = loggerService
    }

    load() {
        for (const user of users) {
            //console.log(user)
            switch (user.type) {
                case "customer":
                    if (!this.checkCustomerValidityForErrors(user)) {
                        this.customers.push(user)
                    }
                    break;
                case "employee":
                    if (!this.checkEmployeeValidityForErrors(user)) {
                        this.employees.push(user)
                    }
                    break;
                default:
                    this.errors.push(new DataError("Wrong user type", user))
                    break;
            }
        }
    }

    // react te formik ve yup 
    checkCustomerValidityForErrors(user) {
        let requiredFields = "id firstName lastName age city".split(" ")
        let hasErrors = false
        //user["age"] = user.age
        for (const field of requiredFields) {
            if (!user[field]) {
                hasErrors = true
                this.errors.push(new DataError(`Validation problem ${field} is required`, user))
            }
        }
        if (Number.isNaN(Number.parseInt(+user.age))) {
            hasErrors = true
            this.errors.push(new DataError(`Validation problem ${field} is not a number`, user))
        }
        return hasErrors
    }


    checkEmployeeValidityForErrors(user) {
        let requiredFields = "id firstName lastName age city salary".split(" ")
        let hasErrors = false
        //user["age"] = user.age
        for (const field of requiredFields) {
            if (!user[field]) {
                hasErrors = true
                this.errors.push(new DataError(`Validation problem ${field} is required`, user))
            }
        }
        if (Number.isNaN(Number.parseInt(user.age))) {
            hasErrors = true
            this.errors.push(new DataError(`Validation problem ${field} is not a number`, user))
        }
        return hasErrors
    }

    add(user) {
        //this.users.push(user)
        switch (users.type) {
            case "customer":
                if (!this.checkCustomerValidityForErrors(user)) {
                    this.customers.push(user)
                }
                break;
            case "employee":
                if (!this.checkEmployeeValidityForErrors(user)) {
                    this.employees.push(user)
                }
            default:
                this.errors.push(new DataError("This user can not be added. Wrong user type", user))
                break;
        }
        //console.log("kullanıcı eklendi " + user)
       // this.loggerService.log(user)
    }

    list() {
        //return this.users
        //console.log("kullanıcılar listelendi")
    }

    listCustomers() {
        return this.customers
    }

    getById(id) {
        //return this.users.find(u=>u.id === id)
        //console.log("kullanıcı detayı getirildi")
    }

    getCustomersById() {
        return this.customers.find(u => u.id === id)
    }

    getCustomersSorted() {
        return this.customers.sort((customer1, customer2) => {
            if (customer1.firstName < customer2.firstName) {
                return -1
            } else if (customer1.firstName === customer2.firstName) {
                return 0
            } else {
                return 1
            }
        })
    }
}