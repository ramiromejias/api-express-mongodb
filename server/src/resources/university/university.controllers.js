const res = require('express/lib/response');
const University = require('./university.model');

const findMany = async (req, res) => {
    try {
      const docs = await University.find().lean().exec();
      res.status(200).json({ results: docs });
    } catch (e) {
      console.log(e);
      res.status(500).json({ error: 'Internal error' });
    }
  }

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

const updateOne = async (req, res) => {
    const { id } = req.params;
    try {
        const doc = await University.findOneAndUpdate({ _id: id }, req.body, { new: true });
        if (!doc) {
            return res.status(404).json({ error: "Not found" });
        }
        res.status(200).json({ results: [doc] });
    } catch (e) {
        console.log(e);
        res.status(500).json({ error: "Cannot update" });
    }
}

const deleteOne = async (req, res) => {
    const { id } = req.params;
    try {
      const doc = await University.findOneAndDelete({ _id: id }, { new: true });
      if (!doc) {
        return res.status(404).json({ error: "Not found" });
      }
      res.status(200).json({ results: [doc] });
    } catch (e) {
      console.log(e);
      res.status(500).json({ error: "Cannot delete" });
    }
}

const findOne = async (req, res) => {
    const { id } = req.params;
    try {
      const doc = await University.findOne({ _id: id });
      if (!doc) {
        return res.status(404).json({ error: "Not found" });
      }
      res.status(200).json({ results: [doc] });
    } catch (e) {
      console.log(e);
      res.status(500).json({ error: "Cannot get university" });
    }
}

module.exports = {
    findMany,
    createOne,
    findOne,
    updateOne,
    deleteOne,
}
