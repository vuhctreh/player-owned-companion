const discord = require("discord.js");
const scraper = require("./Utils/animalScraper");
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
  /**
  message.channel.send(
    `Level for ${query}: ${response.farmingLevel} 
    Pen size: ${response.penSize} 
    Food: ${response.food} 
    Breeding Cycle: ${response.breedingCycle} 
    Success Chance: ${response.breedingSuccessChance}`
  ); */
});

client.login(process.env.DISCORD_TOKEN);
