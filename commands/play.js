const ytdl = require('ytdl-core');
const streamOptions = {
	seek: 0,
	volume: 1
};
module.exports = {
	name: 'play',
	description: 'Play a song from a youtube url',
	usage: '[command name]',
	cooldown: 5,
	execute(message, args) {
		if (message.member.voiceChannel) {
			message.member.voiceChannel.join()
				.then(connection => {
					message.reply('I have successfully connected to the channel!');
					const stream = ytdl(args[0], {
						filter: 'audioonly'
					});
					const dispatcher = connection.playStream(stream, streamOptions);
				})
				.catch(console.log);
		} else {
			message.reply('You need to join a voice channel first!');
		}
	},
};