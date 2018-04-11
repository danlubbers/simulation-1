const baseURL = '/api';

module.exports = {

    read: (req, res) => {
        // This is connecting to the database
        // and needs to be contained within all of the different functions
        const dbInstance = req.app.get('db');

        dbInstance.getAllProducts().then(products => res.status(200).send(products)).catch((err)=>res.status(500).send(err))
   
    },

    create: (req, res) => {
        const dbInstance = req.app.get('db');
        const {image, name, price} = req.body;
        
        dbInstance.addProduct([name, price, image]).then(products=>res.status(200).send(products))
    },
    
    update: (req, res) => {
        res.send();
    },

    delete: (req, res) => {
        console.log(req.params.id)
        const dbInstance = req.app.get('db')

        dbInstance.deleteProduct([req.params.id]).then(products=>{
            res.status(200).send(products)
        })
    }

}