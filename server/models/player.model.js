const mongoose = require("mongoose");

const PlayerSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, "Player name is required!"],
			minlength: [2, "Player name must be at least 2 character long!"]
		},
		position: {
			type: String,
			minlength: [3, "Player's preferred position must be at least 3 character long!"]
		},
		status: {
			game1: {
				type: String,
				default: "undecided"
			},
			game2: {
				type: String,
				default: "undecided"
			},
			game3: {
				type: String,
				default: "undecided"
			}
		}
	},
	{ timestamps: true }
);

const Player = mongoose.model("Player", PlayerSchema);

module.exports = Player;
