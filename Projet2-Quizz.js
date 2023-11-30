const prompt = require("prompt-sync")()

let score = 0;

let questions = [
    { textequestion: "Quelle est la capitale de la France ? ", reponses: ["1. Marseille", " 2. Paris", " 3. Lyon", " 4. Bordeaux"], bonnereponse: "2" },
    { textequestion: "Quel est le nom du plus grand océan du monde ? ", reponses: ["1. Océan Atlantique", " 2. Océan Pacifique", " 3. Océan Indien", " 4. Océan Arctique"], bonnereponse: "2" },
    { textequestion: "Quel est le nom du célèbre tableau de Léonard de Vinci représentant une femme souriante ? ", reponses: ["1. La Vénus de Milo", " 2. La Nuit Etoilée", " 3. La Joconde", " 4. La Liberté guidant le peuple"], bonnereponse: "3" },
    { textequestion: "Quel est le pays le plus petit du monde en terme de superficie ? ", reponses: ["1. Monaco", " 2. Saint-Marin", " 3. Tuvalu", " 4. Le Vatican"], bonnereponse: "4" },
    { textequestion: "Qui a écrit les Misérables et Notre-Dame de Paris ? ", reponses: ["1. Victor Hugo", " 2. Gustave Flaubert", " 3. Alexandre Dumas", " 4. Emile Zola"], bonnereponse: "1" },
];

for (let i = 0; i < questions.length; i++) {
    console.log(questions[i].textequestion + questions[i].reponses);
    let reponseuser = prompt("Quelle est votre réponse ? (1, 2, 3 ou 4) ")
    while (reponseuser != "1" && reponseuser != "2" && reponseuser != "3" && reponseuser != "4") {
        console.log("Choix invalide.");
        reponseuser = prompt("Quelle est votre réponse ? (1, 2, 3 ou 4) ");
    }
    if (reponseuser == questions[i].bonnereponse) {
        score++
        console.log("Bonne réponse.");
    } else { console.log("Mauvaise réponse."); }
}

console.log("Vous avez " + score + " bonnes réponses sur 5.");