const baseURL = '/api';

module.exports = {

    read: (req, res) => {
        const dbInstance = req.app.get('db');

        dbInstance.read_shelfie_products().then(products => res.status(200).send(products)).catch((err)=>res.status(500).send(err))


        // axios.get(`${baseURL}/shelfie_products`).then(res=>{
        //     res.status(200).send()
        // })   
    },

    create: (req, res) => {
        res.send();
    },
    
    update: (req, res) => {
        res.send();
    },

    delete: (req, res) => {
        res.send();
    }

}