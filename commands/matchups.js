const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
	return message.channel.send("Here's what you need you know to clobber the competition, sire!\n" +
		"https://docs.google.com/document/d/1wCiGrSt-ZmY4qQuMXjFC9zNNVL0lkzQSOTO5o4hp0Oc/edit?usp=sharing");
};

module.exports.help = {
	name: "matchups"
};