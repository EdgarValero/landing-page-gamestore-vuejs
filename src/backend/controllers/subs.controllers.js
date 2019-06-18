const mysqlConnect = require("../database.js");

class subsController {
	addSubscription(req) {
		const { email } = req.body;
		console.log(email);
		return new Promise((resolve, reject) => {
			mysqlConnect.query("INSERT INTO subscriptions SET ?", {
				email_sub: email
			}, (err, result) => {
				if(err) reject(err);
				resolve(result);
			});
		});
	}
}

module.exports = subsController;