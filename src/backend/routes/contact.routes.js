const { Router } = require("express");
const router = Router();

const contactController = require("../controllers/contact.controllers.js");

const contact = new contactController();

router.post("/add-contact", async (req, res) => {
	await contact.addContact(req);
	res.json({ message: "Contacto Guardado" });
});

module.exports = router;