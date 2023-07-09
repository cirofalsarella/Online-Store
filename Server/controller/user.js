const User = require('../model/user');

exports.auth = async (rec, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email: email, password:password })
        if (!user) {
            res.status(404).json({ error:"auth error"});
            return;
        }

        res.status(200).json();
    } catch {
        res.status(500).json({ error: error });
    }
}

exports.post = async (req, res) => {
    const { id, admin, email, cpf, password } = req.body;

    const user = {
        id,
        admin,
        email,
        cpf,
        password
    };

    // other fields are not setted at begin

    try {
        await User.create(user);
        res.status(201).json({ message: 'User created' });
    } catch (error) {
        res.status(500).json({ error: error });
    }
}

exports.getById = async (req, res) => {
    const id = req.params.id;

    try {
        const user = await User.findOne({ id: id });

        // if we don't have an user with that id
        if (!user) {
            res.status(404).json({ error:"user was not found"});
            return;
        }

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: error });
    }
}

exports.put = async (req, res) => {
    const pid = req.params.id;

    const { id, name, email, cpf, password, username, address, historic, cart } = req.body;

    const user = {
        id,
        name,
        email,
        cpf,
        password,
        username,
        address,
        historic,
        cart
    };

    try {
        const updatedUser = await User.update({ id: pid }, user);

        if (updatedUser.matchedCount === 0) {
            res.status(404).json({ error:"user was not found"});
            return;
        }

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: error });
    }
}