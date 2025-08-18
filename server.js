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

app.get("/bruxos/nome/:nome", (req, res) => {
  
    let nome = req.params.nome.toLowerCase();

    
    const bruxosEncontrados = bruxos.filter(b => 
        b.nome.toLowerCase().includes(nome)
    );

    if (bruxosEncontrados.length > 0) {
      
        res.status(200).json(bruxosEncontrados);
    } else {
        
        res.status(404).json({
            mensagem: "Bruxo nao encontrado!"
        });
    }
});

app.get("/bruxos/casa/:casa", (req, res) => {

    let casa = req.params.casa;

    const bruxosDaCasa = bruxos.filter(b => b.casa.toLowerCase() === casa.toLowerCase());
    if (bruxosDaCasa.length > 0) {
    
        res.status(200).json(bruxosDaCasa);
    } else {

        res.status(404).json({
            mensagem: "Nenhum bruxo foi encontrado nessa casa!"
        })
    }
});
app.listen(3000, () => {
    console.log(`Acesse seu site http://localhost:3000`);
    console.log("🧙‍♂️ API dos Bruxos está no ar na porta 3000 !");
});