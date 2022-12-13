# hexo-tag-dailymotion
A tag plugin to embed Dailymotion video player in your Hexo blog

[![npm](https://img.shields.io/npm/v/hexo-tag-dailymotion.svg)](https://www.npmjs.com/package/hexo-tag-dailymotion)  [![npm](https://img.shields.io/npm/l/hexo-tag-dailymotion.svg)](https://github.com/dharFr/hexo-tag-dailymotion/blob/main/LICENSE)


## Installation

```
npm install hexo-tag-dailymotion
```

## Usage 

```
{% dailymotion [player:player_id] [video:video_id] [playlist:playlist_id] %}
```

### Parameters

 - `player:player_id`: (optional) Identifier of your custom player configuration (See [Getting Started section in Dailymotion Video player documentation](https://developers.dailymotion.com/player/#getting-started). 
 - `video:video_id`: (optional) Identifier of the video to be loaded within the player
 - `playlist:playlist_id`: (optional) Identifier of the playlist to be loaded within the player

All parameters are optional, but you must add either a `video` or `playlist` or the player will remains an empty black rectangle.

See [Video player documentation – Dailymotion for Developers](https://developers.dailymotion.com/player/) for details about how Dailymotion player works.

### Example usages

#### Embed a video

```
{% dailymotion player:xakn video:x84sh87 %}

```
will inject the following into hexo rendered page or post
``` html
<script src="https://geo.dailymotion.com/player/xakn.js" data-video="x84sh87" ></script>
```

#### Embed a playlist

```
{% dailymotion player:xakn playlist:x79dlo %}

```
will inject the following into hexo rendered page or post
``` html
<script src="https://geo.dailymotion.com/player/xakn.js" data-playlist="x79dlo"></script>
```

#### Embed a video and aplaylist

```
{% dailymotion player:xakn video:x84sh87 playlist:x79dlo %}

```
will inject the following into hexo rendered page or post
``` html
<script src="https://geo.dailymotion.com/player/xakn.js" data-video="x84sh87" data-playlist="x79dlo"></script>
```

#### Embed a default player

```
{% dailymotion video:x84sh87 %}

```
will inject the following into hexo rendered page or post
``` html
<script src="https://geo.dailymotion.com/player.js" data-video="x84sh87"></script>
```
