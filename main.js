const discord = require("discord.js");
const scraper = require("./Utils/animalScraper");
const embed = require("./Utils/embed");
require("dotenv").config();

const client = new discord.Client();

const prefix = ".pof ";

client.once("ready", () => {
  console.log("Bot is online!");
});

client.on("message", async (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const query = message.content.slice(prefix.length).toLowerCase();

  const response = await scraper.getAnimalInfo(query);

  let username = message.author;

  if (response != null) {
    message.channel.send(embed.generateEmbed(username, response, query));
  } else {
    message.channel.send("Page not found");
  }
});

client.login(process.env.DISCORD_TOKEN);
