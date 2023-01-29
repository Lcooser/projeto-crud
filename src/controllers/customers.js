const CustomersModel = require('../models/customers')



function  add(req, res){
    const {
        name,
        age,
        email,
        password
    } = req.body

    const register = new CustomersModel({
        name, 
        age,
        email,
        password,
    })

    register.save()
    res.end('Cadastro realziado!')
}



module.exports = {
    add
}