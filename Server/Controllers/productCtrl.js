const Product = require('../Modals/products')

const productCtrl = {
    getProducts: async (req, res) => {
        try {
            const product = await Product.find()
            return res.send(product)
        } catch (error) {
            return res.status(500).json({ msg: error.message })
        }


    },
    postProduct: async (req, res) => {
        try {
            const { name, price, category, maxProducts, details, image } = req.body;
            if (!name || !price || !category || !maxProducts || !details || !image) {
                return res.status(400).json({ error: 'Please filled the field' })
            } else {
                const product = new Product({ name, price, category, maxProducts, details, image })
                await product.save();
                res.status(201).json({ msg: 'Product Uploaded' })
            }



        } catch (error) {
            return res.status(500).json({ msg: error.message })
        }
    }
}
module.exports = productCtrl
// router.get('/products', (req, res) => {
    //     Products.find().then((result) => {
    //         res.send(result)
    //     }).catch((err) => console.log(err))
    // })
    // router.post('/reg', async (req, res) => {
    //     const { Name, price, category, quantity, date, maxproducts, details, image } = req.body;

    //     if (!Name || !price || !category || !maxproducts || !details || !image) {
    //         return res.status(422).json({ error: 'Please filled the field' })
    //     }
    //     try {
    // const userExist = await Pproducts.findOne({ email: email })

    // if (userExist) {
    //     return res.status(422).json({ error: 'User already exist' })
    // }
    //         const product = new Products({ Name, price, category, quantity, date, maxproducts, details, image })
    //         await product.save();
    //         res.status(201).json({ message: 'User Reg' })
    //     } catch (err) {
    //         console.log(err)
    //     }
    // })

    // router.put('/update/:id', (req, res) => {
    //     if (!req.body.email) {
    //         return res.status(400).send({
    //             message: "Please enter email"
    //         })
    //     }
    //     Playlists.findByIdAndUpdate(req.params.id, {
    //         firstname: req.body.firstname,
    //         lastname: req.body.lastname,
    //         email: req.body.email,
    //         password: req.body.password
    //     }).then((playlist) => {
    //         if (!playlist) {
    //             return res.status(404).send({
    //                 message: "Do not updated"
    //             })
    //         }
    //         res.send(playlist)
    //     })
    //         .catch(err => console.log(err))
    // })

    // router.delete('/delete/:id', async (req, res) => {
    //     const id = req.params.id
    //     await Playlists.findByIdAndRemove(id).exec()
    //     res.send(req.body)
    // })
// }