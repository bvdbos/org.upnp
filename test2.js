'use strict';

const et = require('elementtree');

const tree = et.parse(cleanString(`&lt;Event xmlns=&quot;urn:schemas-upnp-org:metadata-1-0/AVT/&quot;&gt;
&lt;InstanceID val=&quot;0&quot;&gt;
&lt;TransportState val=&quot;NO_MEDIA_PRESENT&quot;/&gt;
&lt;TransportStatus val=&quot;OK&quot;/&gt;
&lt;PlaybackStorageMedium val=&quot;UNKNOWN&quot;/&gt;
&lt;RecordStorageMedium val=&quot;NOT_IMPLEMENTED&quot;/&gt;
&lt;CurrentPlayMode val=&quot;NORMAL&quot;/&gt;
&lt;TransportPlaySpeed val=&quot;1&quot;/&gt;
&lt;RecordMediumWriteStatus val=&quot;NOT_IMPLEMENTED&quot;/&gt;
&lt;CurrentRecordQualityMode val=&quot;NOT_IMPLEMENTED&quot;/&gt;
&lt;NumberOfTracks val=&quot;0&quot;/&gt;
&lt;CurrentTrack val=&quot;0&quot;/&gt;
&lt;PossiblePlaybackStorageMedia val=&quot;UNKNOWN,NETWORK&quot;/&gt;
&lt;PossibleRecordStorageMedia val=&quot;NOT_IMPLEMENTED&quot;/&gt;
&lt;PossibleRecordQualityModes val=&quot;NOT_IMPLEMENTED&quot;/&gt;
&lt;CurrentTrackDuration val=&quot;00:00:00&quot;/&gt;
&lt;CurrentMediaDuration val=&quot;00:00:00&quot;/&gt;
&lt;CurrentTrackMetaData val=&quot;&quot;/&gt;
&lt;CurrentTrackURI val=&quot;unknown track uri&quot;/&gt;
&lt;AVTransportURI val=&quot;unknown transport uri&quot;/&gt;
&lt;AVTransportURIMetaData val=&quot;&quot;/&gt;
&lt;NextAVTransportURI val=&quot;unknown next transport uri&quot;/&gt;
&lt;NextAVTransportURIMetaData val=&quot;&quot;/&gt;
&lt;CurrentTransportActions val=&quot;Play,Stop,Pause&quot;/&gt;
&lt;/InstanceID&gt;
&lt;/Event&gt;`));


function cleanString(str) {
	return str
		.replace(/&(?![a-zA-Z]{1,10};)/g, '&amp;')
		.replace(/(<([a-zA-Z][^>\/\s]*)((\s[^>]*[^\/])|\s)?)>(?!(.|\n|\r)*<\/\2>)/g, '$1/>')
		.match(/((<\?xml[^?]*\?>)?\s*<([a-zA-Z][^\s\/>]*)[\S\s]*?<\/\3[^>]*>)/)[0];
}

console.log(tree);