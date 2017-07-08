const
	jdenticon = require('jdenticon'),
	fs = require('fs'),
	Hash = require('hash.js');

module.exports = (router) => {
	router.get('/:hash/:size', (req, res) => {

		let
			hash = Hash.sha256().update(req.params.hash).digest('hex'),
			size = parseInt(req.params.size);

		let identicon;

		if (req.query.format == 'png') {
			identicon = jdenticon.toPng(hash, size);
		} else {
			identicon = jdenticon.toSvg(hash, size);
		}

		return res.send(identicon);
	});
}