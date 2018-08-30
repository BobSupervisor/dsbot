var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, { colorize: true });
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            // !ping
            case 'ping':
                bot.sendMessage({
                    to: channelID,
                    message: 'Pong!'
                });
            break;
            
			// !bob
            case 'bob':
                bot.sendMessage({
                    to: channelID,
                    message: 'Hi, My Name Is Boby The Supervisor, just ask me i help ya :)!'
                });
            break;
			
			// !pan
            case 'pan':
                bot.sendMessage({
                    to: channelID,
                    message: 'Pan Pan Are Awesome :) '
                });
			break;
			
			// !help
            case 'help':
                bot.sendMessage({
                    to: channelID,
                    message: ' -!bob command, bob will introduce hiself  -ping command for ping -pan command, pan pan the maker -ice command, ice bear for president '
                });
			break;
			
			/ !ice
            case 'ice':
                bot.sendMessage({
                    to: channelID,
                    message: ' VOTE ICE BEAR FOR 2019 PRESIDENT OF INDONESIA '
                });
			break;
         }
     }
});