const ytdl = require('ytdl-core');

module.exports = {
	name: 'play',
	description: 'Play a song from a youtube url',
	usage: '<song url> <volume 1-100>',
	cooldown: 5,
	execute(message, args) {
		let volume = args[1] / 100;
		if (message.member.voiceChannel) {
			const streamOptions = {
				seek: 0,
				volume: volume,
			};

			message.member.voiceChannel.join()
				.then(connection => {
					message.reply('I have successfully connected to the channel!');
					const stream = ytdl(args[0], {
						filter: 'audioonly'
					});
					connection.playStream(stream, streamOptions);
				})
				.catch(console.log);
		} else {
			message.reply('You need to join a voice channel first!');
		}
	},
};