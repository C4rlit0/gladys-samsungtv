module.exports = function (sails) {

	var SamsungRemote = require('samsung-remote');
	var remote = new SamsungRemote({
		ip: '192.168.0.13' // required: IP address of your Samsung Smart TV 
	});
	 
	/*remote.send('KEY_MENU', function callback(err) {
		if (err) {
			throw new Error(err);
		} else {
			// command has been successfully transmitted to your tv 
		}
	});
	 
	// check if TV is alive (ping) 
	remote.isAlive(function(err) {
		if (err) {
			throw new Error('TV is offline');
		} else {
			console.log('TV is ALIVE!');
		}
	});*/
	return {
		remote
	};

};