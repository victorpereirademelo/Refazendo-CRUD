const Produto = require('../../models/Produto');

module.exports = {
    async create(req, res) {
        const { nome, preco } = req.body;

        const createProduto = await Produto.create({ nome, preco });

        return res.json(createProduto);
    },

    async read(req, res) {
        const readProduto = await Produto.findAll();
        // const readProduto = await Produto.findByPk(1);
        // const readProduto = await Produto.findAll({ where: { preco: 3000 } });

        return res.json(readProduto);
    },

    async update(req, res) {
        const { id } = req.params;
        const updateProduto = await Produto.findByPk(id);

        if (!updateProduto) return res.status(400).json({ error: "Produto not found" });

        const { nome, preco } = req.body;

        updateProduto.nome = nome;
        updateProduto.preco = preco;
        await updateProduto.save();

        return res.json(updateProduto);
    },

    async delete(req, res) {
        const { id } = req.params;

        await Produto.destroy({ where: { id } });

        return res.status(200).json({ sucess: 'Produto Excluido' })
    }
};