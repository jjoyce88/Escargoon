const Discord = require("discord.js");
const fs = require("fs");
module.exports.run = async (bot, message, args) => {
	
	
	path = "./assets/images/PoorlyDrawnDDD/";
	img = "";
	
	fs.readdir(path, (err,pics) => {
		console.log(pics);
		index = Math.floor(Math.random() * Math.floor(pics.length-1));
		console.log("\nSelected image is: "+pics[index]);
		
		return message.channel.send(
			{
				files:[{
					attachment: path+pics[index],
					name: pics[index]
				}]
			});
				
	});

};

module.exports.help = {
	name: "jest"
};