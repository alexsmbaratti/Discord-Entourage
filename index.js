const Discord = require("discord.js");
const client = new Discord.Client();
var config = require('./config.json');

const build = "1.0.0";

client.on('ready', () => {
  console.log(`  Logged in as ${client.user.username}!`);
  console.log(`🔨 Build: ${build}`);
});

client.on('voiceStateUpdate', (oldMember, newMember) => {
  if (oldMember.id == config.user_id && newMember.id == config.user_id) {
    console.log("Target user interacted with known voice channel!");
    if (newMember.voiceChannelID != null) {
      if (client.voiceConnections.get(newMember.voiceChannelID) == null) {
        newMember.voiceChannel.join();
	console.log("Joining voice channel...");
      }
    } else {
      oldMember.voiceChannel.leave();
      console.log("Leaving voice channel...");
    }
  }
});

client.login(config.token);
