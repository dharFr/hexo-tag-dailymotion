'use strict';
const assert = require('assert')
const { parse } = require("node-html-parser")

const test = require('./lib/index.js')
const dailymotionTag = require('../lib/dailymotion.js')


// <script src="https://geo.dailymotion.com/player.js" class="video-container"></script>
test("Without parameters, renders a default empty player script", () => {
	
	const renderTag = dailymotionTag([])
	const renderedNode = parse(renderTag).firstChild;

	assert(renderedNode.tagName === 'SCRIPT')
	assert(renderedNode.getAttribute('src') === 'https://geo.dailymotion.com/player.js')
	assert(renderedNode.classList.contains('video-container'))
	assert(renderedNode.getAttribute('data-video') === undefined)
	assert(renderedNode.getAttribute('data-playlist') === undefined)
})

// <script src="https://geo.dailymotion.com/player.js" class="video-container" data-video="x84sh87"></script>
test("With only video parameter, renders a default player script with data-video attribute", () => {
	
	const renderTag = dailymotionTag(['video:x84sh87']);
	const renderedNode = parse(renderTag).firstChild;

	assert(renderedNode.tagName === 'SCRIPT')
	assert(renderedNode.getAttribute('src') === 'https://geo.dailymotion.com/player.js')
	assert(renderedNode.classList.contains('video-container'))
	assert(renderedNode.getAttribute('data-video') === 'x84sh87')
	assert(renderedNode.getAttribute('data-playlist') === undefined)
})

// <script src="https://geo.dailymotion.com/player.js" class="video-container" data-playlist="x79dlo"></script>
test("With only playlist parameter, renders a default player script with data-playlist attribute", () => {
	
	const renderTag = dailymotionTag(['playlist:x79dlo']);
	const renderedNode = parse(renderTag).firstChild;

	assert(renderedNode.tagName === 'SCRIPT')
	assert(renderedNode.getAttribute('src') === 'https://geo.dailymotion.com/player.js')
	assert(renderedNode.classList.contains('video-container'))
	assert(renderedNode.getAttribute('data-video') === undefined)
	assert(renderedNode.getAttribute('data-playlist') === 'x79dlo')
})

// <script src="https://geo.dailymotion.com/player.js" class="video-container" data-video="x84sh87" data-playlist="x79dlo"></script>
test("With only video & playlist parameters, renders a default player script with data-video and data-playlist attributes", () => {
	
	const renderTag = dailymotionTag(['video:x84sh87', 'playlist:x79dlo'])
	const renderedNode = parse(renderTag).firstChild

	assert(renderedNode.tagName === 'SCRIPT')
	assert(renderedNode.getAttribute('src') === 'https://geo.dailymotion.com/player.js')
	assert(renderedNode.classList.contains('video-container'))
	assert(renderedNode.getAttribute('data-video') === 'x84sh87')
	assert(renderedNode.getAttribute('data-playlist') === 'x79dlo')
})

// <script src="https://geo.dailymotion.com/player/xakn.js" class="video-container"></script>
test("With player parameter, renders a empty player script", () => {
	
	const renderTag = dailymotionTag(['player:xakn'])
	const renderedNode = parse(renderTag).firstChild;

	assert(renderedNode.tagName === 'SCRIPT')
	assert(renderedNode.getAttribute('src') === 'https://geo.dailymotion.com/player/xakn.js')
	assert(renderedNode.classList.contains('video-container'))
	assert(renderedNode.getAttribute('data-video') === undefined)
	assert(renderedNode.getAttribute('data-playlist') === undefined)
})

// <script src="https://geo.dailymotion.com/player/xakn.js" class="video-container" data-video="x84sh87"></script>
test("With player and video parameter, renders a player script with data-video attribute", () => {
	
	const renderTag = dailymotionTag(['player:xakn', 'video:x84sh87'])
	const renderedNode = parse(renderTag).firstChild

	assert(renderedNode.tagName === 'SCRIPT')
	assert(renderedNode.getAttribute('src') === 'https://geo.dailymotion.com/player/xakn.js')
	assert(renderedNode.classList.contains('video-container'))
	assert(renderedNode.getAttribute('data-video') === 'x84sh87')
	assert(renderedNode.getAttribute('data-playlist') === undefined)
})

// <script src="https://geo.dailymotion.com/player/xakn.js" class="video-container" data-playlist="x79dlo"></script>
test("With player and playlist parameter, renders a player script with data-playlist attribute", () => {
	
	const renderTag = dailymotionTag(['player:xakn', 'playlist:x79dlo'])
	const renderedNode = parse(renderTag).firstChild

	assert(renderedNode.tagName === 'SCRIPT')
	assert(renderedNode.getAttribute('src') === 'https://geo.dailymotion.com/player/xakn.js')
	assert(renderedNode.classList.contains('video-container'))
	assert(renderedNode.getAttribute('data-video') === undefined)
	assert(renderedNode.getAttribute('data-playlist') === 'x79dlo')
})

// <script src="https://geo.dailymotion.com/player/xakn.js" class="video-container" data-video="x84sh87" data-playlist="x79dlo"></script>
test("With player, video & playlist parameter, renders a player script with data-video and data-playlist attributes", () => {
	
	const renderTag = dailymotionTag(['player:xakn', 'video:x84sh87', 'playlist:x79dlo'])
	const renderedNode = parse(renderTag).firstChild

	assert(renderedNode.tagName === 'SCRIPT')
	assert(renderedNode.getAttribute('src') === 'https://geo.dailymotion.com/player/xakn.js')
	assert(renderedNode.classList.contains('video-container'))
	assert(renderedNode.getAttribute('data-video') === 'x84sh87')
	assert(renderedNode.getAttribute('data-playlist') === 'x79dlo')
})

