const User = require("../models/userSchema");

module.exports.createUserController = async (req, res) => {
    try {
        const { username, sectors, checked } = req.body;
        if (!username || !sectors || !checked) {
            res.status(422).json({
                status: 422,
                error: "all fields are required"
            });
        }

        // Trim the username
        const trimmedUsername = username.trim();
        const createUser = new User({
            username: trimmedUsername,
            sectors,
            checked
        });
        const response = await createUser.save();
        res.status(201).json({
            status: 201,
            message: "user created successfully"
        });
    } catch (error) {
        res.status(500).json({
            status: 500,
            error: error
        });
    }
}

module.exports.getAllUsersController = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json({
            status: 200,
            users
        });
    } catch (error) {
        res.status(500).json({
            status: 500,
            error: error
        });
    }
}

module.exports.getSingleUserController = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById({ _id: id });
        res.status(200).json({
            status: 200,
            user
        });
    } catch (error) {
        res.status(500).json({
            status: 500,
            error: error
        });
    }
}

module.exports.editUserController = async (req, res) => {
    try {
        const { id } = req.params;
        //trim the value
        if (req.body.username) {
            req.body.username = req.body.username.trim();
        }
        await User.findByIdAndUpdate({ _id: id }, { $set: req.body }, { new: true });
        res.status(201).json({
            status: 201,
            message: "user updated successfully"
        });
    } catch (error) {
        res.status(500).json({
            status: 500,
            error: error
        });
    }
}