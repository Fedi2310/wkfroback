const express = require('express')
const Contact = require('../Models/Contact')
const { addContact, getContacts, getOneContact, deleteContact, updateContact } = require('../Controllers/controllers')

ContactRouter = express.Router()

ContactRouter.post('/adduser',addContact)

ContactRouter.get('/getcontacts',getContacts )

ContactRouter.get('/getOneContact/:id',getOneContact)

ContactRouter.delete('/deletecontact/:id',deleteContact)

ContactRouter.put('/updatecontact/:id',updateContact)





module.exports = ContactRouter