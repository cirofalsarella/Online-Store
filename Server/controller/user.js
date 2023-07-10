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
    const { email, admin, cpf, password } = req.body;

    const id = (await User.find()).length

    const user = {
        id,
        email,
        cpf,
        password,
        admin
    };
    console.log(user)

    // other fields are not setted at begin

    try {
        await User.create(user);
        res.status(201).json({ message: 'User created' });
    } catch (error) {
        res.status(500).json({ data: error });
        console.log(error)
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
    const { name, address, cart, historic } = req.body;

    try {
        await User.findOneAndUpdate({id: req.params.id}, {
            $set: { name: name, address: address, cart: cart, historic: historic }
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
