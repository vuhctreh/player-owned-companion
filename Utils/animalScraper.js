const axios = require("axios");
const cheerio = require("cheerio");

const getAnimalInfo = async (query) => {
  console.log(`A request has been submitted for the item: ${query}`);

  try {
    const { data } = await axios.get(
      `https://runescape.wiki/w/${query}_(player-owned_farm)`
    );

    const $ = cheerio.load(data);

    console.log($.html());
  } catch (e) {
    console.log(e);
  }
};

exports.getAnimalInfo = getAnimalInfo;
