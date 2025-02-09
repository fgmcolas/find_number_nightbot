const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

let secretNumber = Math.floor(Math.random() * 100) + 1;

app.get("/", (req, res) => {
    res.send("API du jeu est en ligne !");
});

app.get("/jeu", (req, res) => {
    const guess = parseInt(req.query.nombre);

    if (isNaN(guess)) {
        return res.send("Donne un nombre valide !");
    }

    if (guess === secretNumber) {
        secretNumber = Math.floor(Math.random() * 100) + 1;
        return res.send("Trouvé ! Le nombre a été changé.");
    } else if (guess < secretNumber) {
        return res.send("Plus grand !");
    } else {
        return res.send("Plus petit !");
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Serveur lancé sur le port ${PORT}`));
