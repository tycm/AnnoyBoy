const cassette = require('cassette');
const playlist = new cassette.Playlist();

const { prefix, token, ytapi } = require('./config.json');
const ytService = new cassette.YouTubeService(ytapi);

playlist.add('sweet child of mine');
console.log(playlist.current.streamURL());