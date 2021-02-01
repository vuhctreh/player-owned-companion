const Discord = require('discord.js');
const generateEmbed = (username) => {
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor('#0099ff')
	.setTitle('Chinchompa')
    .setURL('https://runescape.wiki/w/Chinchompa_(player-owned_farm)')
    .setAuthor(username.username, username.displayAvatarURL())
    .setThumbnail('https://cdn.discordapp.com/attachments/805084073914925066/805267710933598258/chinchompabreeds.png')
	.addFields(
        { name: '\u200B\n__Animal Stats__', value: '**Farming Level:** 54\n**Pen Size:** Small\n**Eats:** [Flowers](https://runescape.wiki/w/Flowery_mush), [fruits](https://runescape.wiki/w/Fruity_mush), [mushrooms](https://runescape.wiki/w/Mushy_mush), [raw fish](https://runescape.wiki/w/Fishy_mush), [raw meat](https://runescape.wiki/w/Meaty_mush), [seeds](https://runescape.wiki/w/Seedy_mush), [vegetables](https://runescape.wiki/w/Veggie_mush)\n**Produce:** Varies between breeds. For more details, use `.pof *chinchompa breed type*`. For example, `.pof crystal chinchompa`\n**Breeding Cycle (max cycle):** 2.5 hours (12.5 hours)\n**Breeding Success Chance:** 60%'},
        { name: '\u200B\n__Growth Time (stage to stage)__', value: '**Child:** N/A\n**Adolescent:** 8.4 hours\n**Adult:** 14.7 hours\n**Elder:** 18.9 hours', inline: true},
        { name: '\u200B\n__Growth check Farming XP__', value: '**Child:** N/A\n**Adolescent:** 3,000\n**Adult:** 5,250\n**Elder:** 6,750', inline: true},
        { name: '\u200B\n__Base sell price in beans__', value: '**Egg:** N/A\n**Child:** 50\n**Adolescent:** 250\n**Adult:** 212\n**Elder:** 175', inline: true},
        { name: '\u200B\n__Buyer__', value: '**Buyer:** [Mieliki Tapio (chinchompa collector)](https://runescape.wiki/w/Mieliki_Tapio#Player-owned_farm)\n**Last Spawn:** \n**Next Spawn:** '}
    )
	.setTimestamp()
    .setFooter('Created by FR4 and Portfoliio');
    return exampleEmbed;
    }
exports.generateEmbed = generateEmbed; 

