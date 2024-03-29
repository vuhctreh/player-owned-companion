const axios = require("axios");
const cheerio = require("cheerio");

const getAnimalInfo = async (query) => {
  console.log(`A request has been submitted for the animal: ${query}`);

  try {
    const { data } = await axios.get(
      `https://runescape.wiki/w/${query}_(player-owned_farm)`
    );

    const $ = cheerio.load(data);

    const selector = $($($(".wikitable").get(1)).children().last()).children();

    //TODO make all of these parsers their own functions, remove "\n"s, change some lets to consts

    /**
     * Following selects food and links and adds them
     * to their respective arrays iteratively.
     */
    let childListFood = $(
      $($($(selector).get(2)).children().get(1))
    ).children();
    let foodArray = [];
    let foodLinksArray = [];

    for (i = 0; i < childListFood.length; i++) {
      foodLinksArray.push(
        `https://runescape.wiki${$($(childListFood).get(i)).attr("href")}`
      );
      foodArray.push($($(childListFood).get(i)).html());
    }

    /**
     * Following selects times and adds them to an array
     * iteratively.
     */
    let childListTime = $($($(selector).get(9)).children());
    let timeArray = [];

    for (i = 0; i < childListTime.length; i++) {
      timeArray.push($($(childListTime).get(i)).html());
    }

    /**
     * Following selects xp at each growth stage and pushes
     * them to an array iteratively.
     */
    let childListXP = $($($(selector).get(12)).children());
    let XPArray = [];

    for (i = 0; i < childListXP.length; i++) {
      XPArray.push($($(childListXP).get(i)).html());
    }

    /**
     * Following selects base sell price in beans at each growth
     * stage and pushes them to an array iteratively.
     */
    let childListSellPrice = $($($(selector).get(18)).children());
    let priceArray = [];

    for (i = 0; i < childListSellPrice.length; i++) {
      priceArray.push($($(childListSellPrice).get(i)).html());
    }

    /**
     * Following selects buyer and links and adds them to their
     * respective arrays iteratively.
     */
    const childListBuyer = $($($(selector).get(19)).children().get(1));
    const buyerName = $($(childListBuyer).children().get(1)).html();
    // const buyerNameWithUnderscores = buyerName.replace(/ /g, "_");
    const buyerLink = `https://runescape.wiki/${buyerName.replace(/ /g, "_")}`;

    // edit the first get to change the field being parsed
    let animalInfo = {
      farmingLevel: $($($(selector).get(0)).children().get(1)).html(),
      penSize: $($($(selector).get(1)).children().get(1)).html(),
      food: {
        foodNames: foodArray,
        foodLinks: foodLinksArray,
      },
      breedingCycle: $($($(selector).get(5)).children().get(1)).html(),
      breedingSuccessChance: $($($(selector).get(6)).children().get(1)).html(),
      growthTime: {
        Child: timeArray[0],
        Adolescent: timeArray[1],
        Adult: timeArray[2],
        Elder: timeArray[3],
      },
      growthXP: {
        Child: XPArray[0],
        Adolescent: XPArray[1],
        Adult: XPArray[2],
        Elder: XPArray[3],
      },
      baseSellPrice: {
        Egg: priceArray[0],
        Child: priceArray[1],
        Adolescent: priceArray[2],
        Adult: priceArray[3],
        Elder: priceArray[4],
      },
      buyer: {
        name: buyerName,
        buyerURL: buyerLink,
      },
      lastSpawn: $(
        $(
          $($($($(selector).get(20)).children().get(1)))
            .children()
            .get(0)
        ).children()
      ).html(),
      nextSpawn: $(
        $(
          $($($($(selector).get(21)).children().get(1)))
            .children()
            .get(0)
        ).children()
      ).html(),
    };

    console.log(animalInfo);

    return animalInfo;
  } catch (e) {
    return null;
  }
};

exports.getAnimalInfo = getAnimalInfo;
