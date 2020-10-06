function createPulseUAObject(valid, name, version, fullVersion, versionName, subsets){
	if(!valid){ return undefined; }
	return {
		name: name,
		version: version,
		fullVersion: fullVersion,
		versionName: versionName,
		technologies: subsets
	}	
}

function parseUserAgent(ua){
	ua = ua.trim();	
	try {
		var name = ua.substr(0,ua.indexOf(' ')).split("/")[0]
		var version = ua.substr(0,ua.indexOf(' ')).split("/")[1];	
		var full = ua.substring(ua.lastIndexOf(" ") + 1, ua.length).split("/");	
		var subsFirst = ua.substr(ua.indexOf('(')+1);
		var subsSeconds = subsFirst.substr(0,subsFirst.indexOf(')')).split(";");
		var subs = [];	
		subsSeconds.forEach((entry) => {
			subs.push(entry.trim())
		});	
		return createPulseUAObject(true, name, version, full[1], full[0], subs);
	} catch(e){
		console.log(e);
		return createPulseUAObject(false);
	}
}

module.exports = {

  parse: parseUserAgent,

};