const Discord = require('discord.js');
const { PrivateRooms } = require('./Client');
const Config = require('./Config');
const client = global.client = new PrivateRooms();
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.cooldowns = new Discord.Collection();
client.config = Config;

PrivateRooms.login(client, Config.Bot.Token);
PrivateRooms.loadCommands(client, './Commands/');
PrivateRooms.loadEvents(client, './Events/');
PrivateRooms.Database(client);

Promise.prototype.sil = function (time) {
if (this) this.then(s => {
if (s.deletable) {
setTimeout(async () => {
s.delete()
}, time * 1000)
}
});
};
Discord.Guild.prototype.emojiGöster = function (content) {
const guild = client.guilds.cache.get(this.id)
if (!guild) return "Sunucu bulunamadı."
let emoji = guild.emojis.cache.find((x) => x.name === content) || guild.emojis.cache.get(content) || guild.emojis.cache.find((x) => x.id === content) || guild.emojis.cache.find((x) => x.name.includes(content)) || guild.emojis.cache.get(content.replace(/[^0-9]/g, "")) || guild.emojis.cache.find((x) => x.name.includes(content.replace(/[^0-9]/g, "")))
if (!emoji) return "Emoji bulunamadı."
return emoji;
}

const { joinVoiceChannel } = require('@discordjs/voice');
const voiceChannelId = ''; //ses kanal id gir

client.once('ready', () => {
    console.log(`Bot ${client.user.tag} olarak giriş yaptı!`);
    const guild = client.guilds.cache.first();
    const voiceChannel = guild.channels.cache.get(voiceChannelId);

    if (!voiceChannel) {
        console.error('Belirtilen ses kanalı bulunamadı!');
        return;
    }

    const connection = joinVoiceChannel({
        channelId: voiceChannel.id,
        guildId: guild.id,
        adapterCreator: guild.voiceAdapterCreator,
    });

    console.log(`Bot ${voiceChannel.name} ses kanalına bağlandı!`);
});