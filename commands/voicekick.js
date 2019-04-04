module.exports = {
	name: 'voicekick',
	description: 'The bot will kick the mentioned user from their voice channel',
	execute(message, args) {
		if (message.mentions[0].voiceChannel) {
			message.mentions[0].voiceChannel.clone('toKick')
				.then(clone => {
					message.mentions[0].setVoiceChannel(clone.id);
					clone.delete('To kick member');
				});
		} else {
			message.reply('This member is not in a voice channel');
		}
	},
};