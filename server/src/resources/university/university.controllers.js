const University = require('./university.model');

const createOne = async (req, res) => {
    try {
        const newUniversity = req.body;
        const doc = await University.create(newUniversity);
        res.status(200).send({ results: [doc] });
    } catch (e) {
        console.log(e);
        res.status(500).send({ error: "Creation failed" });
    }
}

module.exports = {
    createOne,
}
