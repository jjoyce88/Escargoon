const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
	hello = "~hello -Escagoon Greets you\n"; 
	jest = "~jest -A picture of our lord and saviour graces you with its presents\n";
	lab = "~lab -A link to the lab doc is posted\n";
	mu = "~matchups -A link to the MatchUp doc is posted\n";
	res ="~resources -A link to the resource doc is posted\n";
	tama ="~tama -Your very own King!!1!\nTake good care of him\n";
	help ="~help -this help post will be posted\n";
	return message.channel.send(hello+jest+lab+mu+res+tama+help);
};

module.exports.help = {
	name: "help"
};