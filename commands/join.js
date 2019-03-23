module.exports = {
	name: 'join',
	description: 'The bot will join the voice channel you are in',
	execute(message) {
		if (message.member.voiceChannel) {
			message.member.voiceChannel.join()
				.then(connection => {
					message.reply('I have successfully connected to the channel!');
					console.log(connection);
				})
				.catch(console.log);
		}
		else {
			message.reply('You need to join a voice channel first!');
		}
	},
};