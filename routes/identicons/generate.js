const
	jdenticon = require('jdenticon'),
	fs = require('fs'),
	Hash = require('hash.js');

module.exports = (router) => {
	router.get('/:hash/:size', (req, res) => {
		let
			hash = Hash.sha256().update(req.params.hash).digest('hex'),
			size = req.params.size;

		let identicon = jdenticon.toSvg(hash, size);

		return res.send(identicon);
	});
}