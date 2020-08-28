let urlPlaylist = 'https://www.youtube.com/playlist?list=PLn2LyRviUqDXrJaj_fcFV66dHABaoNcAl';

const fs = require('fs');
const ytdl = require('ytdl-core');
var ytpl = require('ytpl');
ytpl.do_warn_deprecate = false;
let result = ytpl(urlPlaylist, function (err, metaDatasPlaylist) {
    if (err) {
        console.log(err);
    } else {
        for (let i = 0; i < metaDatasPlaylist.items.length; i++) {
            let videoUrl = metaDatasPlaylist.items[i].url;
            let videoFormat = metaDatasPlaylist.items[i].title + '.mp4';
            ytdl(videoUrl).pipe(fs.createWriteStream(videoFormat));
        }
    }
});