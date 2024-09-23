exports.addContact = async(req,res)=>{
    try {


        const found = await Contact.findOne({email : req.body.email})
        if(found){
           return res.status(400).send("user already exist")
        }

        const contactToSave = new Contact(req.body)

        await contactToSave.save()
        res.status(200).send({msg : "contact saved" , contactToSave})
        
    } catch (error) {
        res.status(500).send("could not add contact")
    }
}

exports.getContacts=async(req,res)=>{
    try {
        const contacts = await Contact.find()

        res.status(200).send({msg : "contact list", contacts})
    } catch (error) {
      res.send("could not get contact")  
    }
}

exports.getOneContact=async(req,res)=>{
    try {
        const {id} = req.params


       const contact =  await Contact.findById(id)
       res.status(200).send({msg : "contact", contact})
    } catch (error) {
       res.status(500).send("could not get contact") 
    }
}


exports.deleteContact=async(req,res)=>{
    try {
        const {id} = req.params
        await Contact.findByIdAndDelete(id)
        res.status(200).send('contactdeleted')
        
    } catch (error) {
        res.status(500).send("could not delete contact") 

    }
}

exports.updateContact=async(req,res)=>{
    try {
        const {id}= req.params

        await Contact.findByIdAndUpdate(id,{$set : req.body})

        res.status(200).send('contact updated')
        
    } catch (error) {

     res.status(500).send("could not update contact") 

    }
}