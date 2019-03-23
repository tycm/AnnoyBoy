module.exports = {
	name: 'leave',
	description: 'The bot will leave the voice channel you are in',
	execute(message) {
		if (message.member.voiceChannel) {
			message.member.voiceChannel.leave();
			message.reply('I have succesfully left the channel');
		}
		else {
			message.reply('You need to join a voice channel first!');
		}
	},
};