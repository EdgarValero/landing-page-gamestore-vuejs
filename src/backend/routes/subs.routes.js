const { Router } = require("express");
const router = Router();

const subsController = require("../controllers/subs.controllers.js");

const subscription = new subsController();

router.post("/add-subscription", async (req, res) => {
	await subscription.addSubscription(req);
	res.json({ message: "Subs Guardado" });
});

module.exports = router;