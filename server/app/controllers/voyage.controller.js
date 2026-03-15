const db = require("../models");
const Voyage = db.voyages;

exports.findAll = (req, res) => {
  Voyage.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Une erreur s'est produite lors de la récupération des voyages.",
      });
    });
};

exports.create = (req, res) => {
  if (!req.body.name) {
    res.status(400).send({
      message: "Le nom du voyage est obligatoire",
    });
    return;
  }
  if (!req.body.description) {
    res.status(400).send({
      message: "La description du voyage est obligatoire",
    });
    return;
  }
  if (!req.body.price) {
    res.status(400).send({
      message: "Le prix du voyage est obligatoire",
    });
    return;
  }
  if (!req.body.category) {
    res.status(400).send({
      message: "La catégorie du voyage est obligatoire",
    });
    return;
  }
  Voyage.create(req.body)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "L'insertion des données a échoué.",
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
        message: "Les données sont introuvables.",
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
          message: "Voyage mis à jour",
        });
      } else {
        res.send({
          message: "Le voyage n'a pas été trouvé",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Echec de la mise à jour.",
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
          message: "Voyage supprimé",
        });
      } else {
        res.send({
          message: "Voyage introuvable",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Echec de la supression.",
      });
    });
};
