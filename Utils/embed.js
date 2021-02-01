const Discord = require('discord.js');
const generateEmbed = (username, animalInfo, animalName) => {
    let foods = '[' + animalInfo.food.foodNames[0] + '](' + animalInfo.food.foodLinks[0] + ')';
    for (var i = 1; i < animalInfo.food.foodNames.length; i++) {
        foods += ', [' + animalInfo.food.foodNames[i] + '](' + animalInfo.food.foodLinks[i] + ')'
    }
    const animalNameUpper = animalName.charAt(0).toUpperCase() + animalName.slice(1);
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor('#0099ff')
	.setTitle(animalNameUpper)
    .setURL(`https://runescape.wiki/w/${animalNameUpper}_(player-owned_farm)`)
    .setAuthor(username.username, username.displayAvatarURL())
    .setThumbnail('https://cdn.discordapp.com/attachments/805084073914925066/805267710933598258/chinchompabreeds.png')
	.addFields(
        { name: '\u200B\n__Animal Stats__', value: '**Farming Level:** ' + animalInfo.farmingLevel +'**Pen Size:** ' + animalInfo.penSize +'**Eats:** ' + foods + '\n**Produce:** Varies between breeds. For more details, use `.pof * animal breed type*`. For example, `.pof crystal chinchompa`\n**Breeding Cycle (max cycle):** '+ animalInfo.breedingCycle +'**Breeding Success Chance:** '+ animalInfo.breedingSuccessChance +''},
        { name: '\u200B\n__Growth Time (stage to stage)__', value: '**Child:** ' + animalInfo.growthTime.Child + '**Adolescent:** ' + animalInfo.growthTime.Adolescent + '**Adult:** ' + animalInfo.growthTime.Adult + '**Elder:** ' + animalInfo.growthTime.Elder + '', inline: true},
        { name: '\u200B\n__Growth check Farming XP__', value: '**Child:** ' + animalInfo.growthXP.Child + '**Adolescent:** ' + animalInfo.growthXP.Adolescent + '**Adult:** ' + animalInfo.growthXP.Adult + '**Elder:** ' + animalInfo.growthXP.Elder + '', inline: true},
        { name: '\u200B\n__Base sell price in beans__', value: '**Egg:** ' + animalInfo.baseSellPrice.Egg + '\n**Child:** ' + animalInfo.baseSellPrice.Child + '\n**Adolescent:** ' + animalInfo.baseSellPrice.Adolescent + '\n**Adult:** ' + animalInfo.baseSellPrice.Adult + '\n**Elder:** ' + animalInfo.baseSellPrice.Elder + '', inline: true},
        { name: '\u200B\n__Buyer__', value: '**Buyer:** [' + animalInfo.buyer.name + '](' + animalInfo.buyer.buyerURL + ')**\nLast Spawn:** ' + animalInfo.lastSpawn + '**\nNext Spawn:** ' + animalInfo.nextSpawn}
    )
	.setTimestamp()
    .setFooter('Created by FR4 and Portfoliio');
    return exampleEmbed;
    } 
exports.generateEmbed = generateEmbed; 

