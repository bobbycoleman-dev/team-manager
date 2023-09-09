const Player = require("../models/player.model");

module.exports.findAllPlayers = (req, res) => {
	Player.find()
		.then((allPlayers) => {
			res.json(allPlayers);
		})
		.catch((err) => {
			res.json(err);
		});
};

module.exports.findOneSinglePlayer = (req, res) => {
	Player.findOne({ _id: req.params.id })
		.then((onePlayer) => {
			res.json(onePlayer);
		})
		.catch((err) => {
			res.json(err);
		});
};

module.exports.createNewPlayer = (req, res) => {
	Player.create(req.body)
		.then((newPlayer) => {
			res.json(newPlayer);
		})
		.catch((err) => {
			res.status(400).json(err);
		});
};

module.exports.updateExistingPlayer = (req, res) => {
	Player.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
		.then((updatedPlayer) => {
			res.json(updatedPlayer);
		})
		.catch((err) => {
			res.status(400).json(err);
		});
};

module.exports.deleteAnExistingPlayer = (req, res) => {
	Player.deleteOne({ _id: req.params.id })
		.then((result) => {
			res.json(result);
		})
		.catch((err) => {
			res.json(err);
		});
};
