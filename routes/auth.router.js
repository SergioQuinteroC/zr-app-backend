const express = require("express");
const passport = require("passport");
const jwt = require("jsonwebtoken");

const { config } = require("./../config/config");

const router = express.Router();

router.post(
	"/login",
	passport.authenticate("local", { session: false }),
	async (req, res, next) => {
		try {
			const user = req.user;
			const payload = {
				sub: user.id,
			};
			const token = jwt.sign(payload, config.jwtSecret);
			res.json({
				user,
				token,
			});
		} catch (error) {
			next(error);
		}
	}
);

router.post("/verify-token", (req, res, next) => {
	const { token } = req.body;
	try {
		jwt.verify(token, config.jwtSecret, (err, decoded) => {
			if (err) {
				return res.status(401).send({
					error: "Token invalido",
				});
			}
			return res.status(200).send({
				message: "Token valido",
				decoded,
			});
		});
	} catch (error) {
		next(error);
	}
});

module.exports = router;
