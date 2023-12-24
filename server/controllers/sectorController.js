const Sector = require("../models/sectorSchema");

module.exports.createSectorController = async (req, res) => {
    try {
        const data = req.body;
        for (const category in data) {
            if (data.hasOwnProperty(category)) {
                const categoryData = data[category];
                await Sector.insertMany(categoryData.map(item => ({ category, ...item })));
            }
        }

        return res.status(200).json({ message: 'Data inserted successfully.' });
    } catch (error) {
        res.status(500).json({
            status: 500,
            error: error
        });
    }
}

module.exports.getAllSectorsController = async (req, res) => {
    try {
        const sectors = await Sector.find();
        res.status(200).json({
            sectors
        });
    } catch (error) {
        res.status(500).json({
            status: 500,
            error: error
        });
    }
}