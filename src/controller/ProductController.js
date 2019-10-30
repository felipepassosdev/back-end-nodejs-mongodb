const mongoose = require('mongoose')

const Product = mongoose.model('Product')

module.exports = {
    async getProducts(req, res) {
        const products = await Product.find()

        return res.json(products)
    },

    async postProducts(req, res) {
        const products = await Product.create(req.body)

        return res.json(products)
    }
}