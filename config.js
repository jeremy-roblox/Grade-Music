module.exports = {
    helpCmdPerPage: 10,
    lyricsMaxResults: 5,
    adminId: "434798000188162078",
    token: process.env.token || "",
    clientId: process.env.clientId || "",
    clientSecret: process.env.clientSecret || "",
    port: 4200,
    scopes: ["identify", "guild", "application.commands"],
    inviteScopes: ["bot", "application.commands"],
    serverDeafen: true,
    defaultVolume: 100,
    supportServer: "https://discord.gg/dy5zYMUCa5",
    Issues: "https://github.com/jeremy-roblox/Grade-Music/issues",
    permissions: 1879056446,
    disconnectTime: 30000,
    twentyFourSeven: false,
    autoQueue: false,
    autoPause: true,
    autoLeave: false,
    debug: false,
    cookieSecret: "HowdensServices Owned by Jeremy",
    website: "http://localhost:4200",
    nodes: [
		{
			identifier: "Main Node", //- Used for indentifier in stats commands.
			host: "lavalink", //- The host name or IP of the lavalink server.
			port: 2333, // The port that lavalink is listening to. This must be a number!
			password: "youshallnotpass", //- The password of the lavalink server.
			retryAmount: 200, //- The amount of times to retry connecting to the node if connection got dropped.
			retryDelay: 40, //- Delay between reconnect attempts if connection is lost.
			secure: false, //- Can be either true or false. Only use true if ssl is enabled!
		},
	],
    embedColor: "#2f3136",
    presence: {
        status: "online",
        activities: [
            {
                name: "Music",
                type: "LISTENING"
            },
        ],
    },
    iconURL: "https://cdn.darrennathanael.com/icons/spinning_disk.gif",
};