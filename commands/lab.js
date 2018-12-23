const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
	return message.channel.send("Here is the key to the lab, your majesty.\n" +
		"https://docs.google.com/spreadsheets/d/1SMQBjv2T_QKkTr6VJzr9FBSoMzHz9bU-cKcYSauker4/edit?usp=sharing");
};

module.exports.help = {
	name: "lab"
};