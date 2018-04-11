const baseURL = '/api';

module.exports = {

    // Read connects to axios.get under the componentDidMount Method
    read: (req, res) => {
        // This is connecting to the database
        // and needs to be contained within all of the different functions
        const dbInstance = req.app.get('db');

        // getAllProducts() refers to db/getAllProducts.sql
        dbInstance.getAllProducts().then(products => res.status(200).send(products)).catch((err)=>res.status(500).send(err))
   
    },

    create: (req, res) => {
        const dbInstance = req.app.get('db');
        // Destructure variables off req.body
        const {image, name, price} = req.body;
        // addProduct() refers to db/addProduct.sql
        dbInstance.addProduct([name, price, image]).then(products=>res.status(200).send(products))
    },
    
    update: (req, res) => {
        res.send();
    },

    delete: (req, res) => {
        console.log(req.params.id)
        // The line below is always required for all controller functions
        const dbInstance = req.app.get('db')

        // deleteProduct() refers to db/deleteProduct.sql
        dbInstance.deleteProduct([req.params.id]).then(products=>{
            res.status(200).send(products)
        })
    }

}