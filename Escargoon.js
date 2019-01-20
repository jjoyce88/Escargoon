const Discord = require('discord.js');
const config = require("./config.json");
const Commando = require("discord.js-commando");
const fs = require('fs');

const client = new Commando.Client({
	owner: config.ownerID,
	commandPrefix: config.prefix,
	unknownCommandResponse: false
});

client.commands = new Discord.Collection();
const path = require('path');

fs.readdir("./commands/", (err, files) => {

	if (err) console.log(err);

	let jsfile = files.filter(f => f.split(".").pop() === "js")
	if (jsfile.length <= 0) {
		console.log("Couldn't find commands.");
		return;
	}

	jsfile.forEach((f, i) => {
		let props = require(`./commands/${f}`);
		console.log(`${f} loaded!`);
		client.commands.set(props.help.name, props);
	});
	


});

client.on('ready', () =>
{

	serverNum = client.guilds.size;
	console.log("I'm online on " + serverNum + " servers!");
});
 
client.on("message", message =>
{
	if (message.author.bot) return;
	if (message.channel.type === "dm") return;

	let prefix = config.prefix;
	let messageArray = message.content.split(" ");
	let cmd = messageArray[0];
	let args = messageArray.slice(1);

	let commandfile = client.commands.get(cmd.slice(prefix.length));
	if (commandfile) commandfile.run(client, message, args);

});

client.on("guildMemberAdd",member => {
	channel = member.guild.channels.find(ch => ch.name === config.greetChannel); 
	if(!channel)
		console.log("Could not find channel: "+ config.greetChannel);
	waddleWave = client.emojis.find(emoji => emoji.name === "WaddleWave");
	if (waddleWave)
		channel.send(member.displayName + ", has joined the server. \nSay Hello! " + waddleWave);
	else
		channel.send(member.displayName + ", has joined the server. \nSay Hello! ");
});
 

client.login(config.token).then(console.log).catch(console.error);
