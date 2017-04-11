'use strict';

const MediaRenderClient = require('upnp-mediarenderer-client');
const UpnpClient = require('node-ssdp').Client;
const upnpClient = new UpnpClient();
const serviceMap = new Map();

upnpClient.on('response', (headers, statusCode, rinfo) => {
	if (!serviceMap.has(headers.LOCATION)) {
		serviceMap.set(headers.LOCATION, { headers, rinfo });
		console.log('response', headers, statusCode, rinfo);

		if(rinfo.address === '192.168.1.65'){
			const client = new MediaRenderClient(headers.LOCATION);

			client.on('status', (status) => console.log('STATUS', status));
			client.on('loading', (status) => console.log('LOADING', status));

			client.on('playing', function() {
				console.log('playing');

				client.getPosition(function(err, position) {
					console.log(position); // Current position in seconds
				});

				client.getDuration(function(err, duration) {
					console.log(duration); // Media duration in seconds
				});
			});

			client.on('paused', function() {
				console.log('paused');
			});

			client.on('stopped', function() {
				console.log('stopped');
			});

			client.getDuration(console.log)

			// client.load(
			// 	'https://chromecast.athomdev.com/test.mp3',
			// 	{
			// 		autoplay: true,
			// 		contentType: 'audio/mpeg',
			// 		metadata: {
			// 			title: 'TEst',
			// 			creator: 'me',
			// 			type: 'audio',
			// 		}
			// 	},
			// 	(status) => console.log('LOADED', status)
			// );
		}
	}
});

upnpClient.search('urn:schemas-upnp-org:device:MediaRenderer:1');

console.log('searching');

setTimeout(() => console.log('end'), 60000);