'use strict';

const { htmlTag } = require('hexo-util');


/**
* Dailymotion tag
*
* Syntax:
*   {% dailymotion [player:player_id] [video:video_id] [playlist:playlist_id]  %}
*/
hexo.extend.tag.register('dailymotion', function (args) {

  const arg = args.join(' ');

  const [, player=null] = arg.match(/\s*player:(\w+)/i) || [];
  const [, video=null] = arg.match(/\s*video:(\w+)/i) || [];
  const [, playlist=null] = arg.match(/\s*playlist:(\w+)/i) || [];

  const playerPath = player ? `player/${player}.js` : `player.js`;
  
  return htmlTag('script', {
    src: `https://geo.dailymotion.com/${playerPath}`, 
    class: 'video-container',
    ...(video ? {'data-video': video} : null),
    ...(playlist ? {'data-playlist': playlist} : null),
  }, '', false);
});
