const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
	return message.channel.send("Hello, your highness! <:WaddleWave:430513928418754560>");
};

module.exports.help = {
	name: "hello"
};