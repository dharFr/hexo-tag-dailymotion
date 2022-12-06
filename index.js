'use strict';

const dailymotionTag = require('./lib/dailymotion.js')

hexo.extend.tag.register('dailymotion', dailymotionTag);