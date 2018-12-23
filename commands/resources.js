const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
	return message.channel.send("Here is the resource document, your majesty.\n" +
		"https://docs.google.com/document/d/1-iQTKwMMnseur4jk5CLSYBvot67YdjouSc_hW5sDtJ4/edit?usp=sharing");
};

module.exports.help = {
	name: "resources"
};