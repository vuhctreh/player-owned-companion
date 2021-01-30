const discord = require("discord.js");
require("dotenv").config();

const client = new discord.Client();

const prefix = ".pof ";

client.once("ready", () => {
  console.log("Bot is online!");
});

client.on("message", async (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  message.channel.send("bruh");
});

client.login(process.env.DISCORD_TOKEN);
