const Discord = require('discord.js');
const config = require("./config.json");
const prefix = config.prefix;
const Commando = require("discord.js-commando");

const client = new Commando.Client({
    owner: config.ownerID
});

const path = require('path');

client.registry
    // Registers your custom command groups
    .registerGroups([
        ['help', 'Get information on Escargoon\'s commands']
    ])

    // Registers all built-in groups, commands, and argument types
    .registerDefaults()

    // Registers all of your commands in the ./commands/ directory
    .registerCommandsIn(path.join(__dirname, 'commands'));

client.on('ready', () =>
{
	console.log("I'm online!");
});

// This loop reads the /events/ folder and attaches each event file to the appropriate event.
fs.readdir("./events/", (err, files) =>
{
	if (err) return console.error(err);
	files.forEach(file =>
	{
		let eventFunction = require(`./events/${file}`);
		let eventName = file.split(".")[0];

		// super-secret recipe to call events with all their proper arguments *after* the `client` var.
		client.on(eventName, (...args) => eventFunction.run(client, ...args));
	});
});
 
client.on("message", message =>
{
	if (!message.content.startsWith(prefix) || message.author.bot) return;
	if(message.content.indexOf(config.prefix) !== 0) return;

	// Define arguments
	const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
	const command = args.shift().toLowerCase();
	
	try
	{
		let commandFile = require(`./commands/${command}.js`);
		commandFile.run(client, message, args);
	}
	catch (err)
	{
		console.error(err);
	}

});
 
client.login(config.token);