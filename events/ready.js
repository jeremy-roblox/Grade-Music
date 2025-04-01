/**
 * 
 * @param {import("../lib/DiscordMusicBot")} client
 */
module.exports = (client) => {
    client.manager.init(client.user.id);
    client.user.setPresence(client.config.presence)
    client.log("Succesfully Logged in as " + client.user.tag)
}