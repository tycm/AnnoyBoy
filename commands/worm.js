module.exports = {
	name: 'worm',
	description: 'worm!',
	execute(message) {
		let hold = ['There are about 6,000 species of earthworm', 'The glaciers that crawled across Canada into the northern tier of the lower 48 states during the most recent ice age wiped out earthworms in that area.']
		if(message.member.user.username != 'seahenge'){
			message.channel.send(hold[1]);
		}else if(message.member.user.username == 'thekeely4really'){
			message.channel.send('Keely do your homework.');
		}else{
			message.channel.send('Elise should add a worm command.');
		}
		
	},
};