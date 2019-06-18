const mysqlConnect = require("../database.js");

class contactController {
	addContact(req) {
		const { fullname, email, affair, message } = req.body;
		return new Promise((resolve, reject) => {
			mysqlConnect.query("INSERT INTO contacts SET ?", {
				fullname,
				email,
				affair,
				message
			}, (err, result) => {
				if(err) reject(err);
				resolve(result);
			});
		});
	}
}

module.exports = contactController;