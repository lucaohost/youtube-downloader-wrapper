let videoUrl = 'https://www.youtube.com/watch?v=J---aiyznGQ';
let videoFormat = 'video.mp4';

const fs = require('fs');
const ytdl = require('ytdl-core');
ytdl(videoUrl).pipe(fs.createWriteStream(videoFormat));