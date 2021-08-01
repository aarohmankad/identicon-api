const
	jdenticon = require('jdenticon'),
	fs = require('fs'),
	Hash = require('hash.js');

module.exports = (router) => {
	router.get('/:hash/:size', (req, res) => {

		let
			hash = Hash.sha256().update(req.params.hash).digest('hex'),
			size = parseInt(req.params.size),
			jdenticonConfig = {},
			identicon;

		if (req.query.config && /^([a-z0-9]{24})$/i.test(req.query.config)) {
			let config = {
				bgColor: req.query.config.substr(0, 8),
				singleHue: req.query.config.substr(8, 1),
				hue: req.query.config.substr(9, 3),
				satCol: req.query.config.substr(12, 2),
				satGrey: req.query.config.substr(14, 2),
				litCol1: req.query.config.substr(16, 2),
				litCol2: req.query.config.substr(18, 2),
				litGrey1: req.query.config.substr(20, 2),
				litGrey2: req.query.config.substr(22, 2)
			};
			jdenticonConfig = {
				backColor: '#' + config.bgColor,
				hues: config.singleHue === '0' ? null : [parseInt(config.hue, 16)],
				lightness: {
					color: [parseInt(config.litCol1, 16) / 100, parseInt(config.litCol2, 16) / 100],
					grayscale: [parseInt(config.litGrey1, 16) / 100, parseInt(config.litGrey2, 16) / 100]
				},
				saturation: {
					color: parseInt(config.satCol, 16) / 100,
					grayscale: parseInt(config.satGrey, 16) / 100
				}
			};
		}

		jdenticon.configure(jdenticonConfig);

		if (req.query.format == 'png') {
			identicon = jdenticon.toPng(hash, size);
		} else {
			identicon = jdenticon.toSvg(hash, size);
		}

		return res.send(identicon);
	});
}