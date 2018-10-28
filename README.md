# Discord Entourage
A short program that lets your Discord Bot join a voice channel with you

## How to Run
### Prerequisites
* A Discord account
* A Discord bot user (no code needed)
  * Should be on a Discord server with you
  * Should be allowed to join a voice channel

### 1. Edit the config.json file
Use your favorite text editor to edit the `config.json` file. Using the [Discord Developer Portal](https://discordapp.com/developers), replace `YOUR_BOT_TOKEN_HERE` with your bot's token (found in the Bot tab of your Discord application). Replace `YOUR_USER_ID_HERE` with your Discord user ID. If you don't know how to get your user ID, open up Discord settings, navigate to the bottom of the Appearance tab, and toggle on Developer Mode. Then, go into a Discord server, and right click on your name in the right sidebar. Select `Copy ID`. This is your Discord user ID.

Note: If you encounter any issues with the `config.json` file, ensure that the quotes are syntactically correct and there is one comma in the file.

### 2. Run the script
In your terminal, navigate to the Discord Entourage directory and run with `npm test`. From here, you can join a voice channel in a server with your Discord bot and your bot should join as well. When you leave, your bot should automatically leave. To quit the script, use `control-C`.
