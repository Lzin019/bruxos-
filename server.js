import express from "express";
import bruxos from "./src/data/bruxos.js";

const app = express();

app.get("/", (req,res) => {
    res.send("Vamos de Harry Potter")
})

app.get("/bruxos", (req, res) => {
    res.json(bruxos);
});


app.get(`/bruxos/:id`, (req, res) => {
    let id = req.params.id;
    id = parseInt(id);
    const bruxo = bruxos.find(b => b.id === id);
    
if (bruxo) {
    res.json(bruxo);
} else {
    res.status(400).json({
        mensagem: "Bruxo Não encontrado"
    })
}

})

app.listen(3000, () => {
    console.log(`Acesse seu site http://localhost:3000`);
    console.log("🧙‍♂️ API dos Bruxos está no ar na porta 3000 !");
});