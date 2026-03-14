const db = require("../models");
const Voyage = db.voyages;

exports.findAll = (req, res) => {
  Voyage.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving voyages.",
      });
    });
};

exports.create = (req, res) => {
  if (!req.body.name) {
    res.status(400).send({
      message: "The name is mandatory",
    });
    return;
  }
  Voyage.create(req.body)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not insert data.",
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;
  Voyage.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not find the data.",
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;
  Voyage.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Voyage updated",
        });
      } else {
        res.send({
          message: "Voyage not found",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not update the data.",
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;
  Voyage.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Voyage deleted",
        });
      } else {
        res.send({
          message: "Voyage not found",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete the data.",
      });
    });
};
