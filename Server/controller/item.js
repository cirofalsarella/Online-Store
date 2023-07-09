const Item = require('../model/item');

exports.post = async (req, res) => {
    const { id, name, img, description, price, stock } = req.body;

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
    try {
        await Item.find();
        res.status(200).json(item);
    } catch (error) {
        res.status(500).json({ error: error });
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
    const pid = req.params.id;

    const { id, name, img, description, price, stock } = req.body;

    const item = {
        id,
        name,
        img,
        description,
        price,
        stock
    };

    try {
        const updatedItem = await Item.update({ id: pid }, item);

        if (updatedItem.matchedCount === 0) {
            await Item.create(item);
            res.status(201).json({ message: 'No itens found, a new one was created' });
        }

        res.status(200).json(item);
    } catch (error) {
        res.status(500).json({ error: error });
    }
}