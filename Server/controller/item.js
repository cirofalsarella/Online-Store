const Item = require('../model/item');


exports.post = async (req, res) => {
    const { name, img, description, price, stock } = req.body;
    const id = (await Item.find()).length

    const item = {
        id,
        name,
        img,
        description,
        price,
        stock
    };

    try {
        await Item.create(item);
        res.status(201).json({ message: 'Item created' });
    } catch (error) {
        res.status(500).json({ error: error });
    }
}


exports.get = async (req, res) => {
    let item
    try {
        item = await Item.find();
        res.status(200).json(item);
    } catch (error) {
        res.status(500).json({ error: error });
        console.log(error)
    }
}


exports.getById = async (req, res) => {
    const id = req.params.id;

    try {
        const item = await Item.findOne({ id: id });

        // if we don't have an item with that id
        if (!item) {
            res.status(404).json({ error:"Item was not found"});
            return;
        }

        res.status(200).json(item);
    } catch (error) {
        res.status(500).json({ error: error });
    }
}


exports.put = async (req, res) => {
    const { description, price, stock, reviews } = req.body;

    try {
        await User.findOneAndUpdate({id: req.params.id}, {
            $set: { description: description, price: price, stock: stock, reviews: reviews }
        })
        res.status(201).send({
            message:"update ok!"
        })
    } catch(e) {
        res.status(400).send({
            message: "update faild",
            data: e
        })
    }
}