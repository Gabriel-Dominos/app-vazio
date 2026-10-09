
const express = require("express");
const router = express.Router();

// Página de contato
router.get("/contato", (req, res) => {
    res.render("contato");
});

module.exports = router;

