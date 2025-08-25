import express from "express";
import dados from "./src/data/dados.js";

const {bruxos, casas, varinhas, animais, pocoes} = dados;

const app = express();
app.use(express.json());

app.get("/", (req,res) => {
    res.send("Vamos de Harry Potter")
})

app.get("/bruxos", (req, res) => {
    res.status(200).res.json(bruxos);
});

app.get("/casas", (req, res) => {
    res.status(200).json(casas);
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

app.get("/varinhas", (req, res) => {
    if (varinhas.length > 0) {
        res.status(200).json(varinhas);
    } else {
        res.status(404).json({
            mensagem: "Nenhuma varinha encontrada!"
        })
    }
});

app.get("/animais", (req, res) => {
    if (animais.length > 0) {
        res.status(200).json(animais);
    } else {
        res.status(404).json({
            mensagem: "Nenhum animal encontrado!"
        })
    }
});

app.get("/pocoes", (req, res) => {
    if (pocoes.length > 0) {
        res.status(200).json(pocoes);
    } else {
        res.status(404).json({
            mensagem: "Nenhuma poção encontrada!"
        })
    }
});

app.listen(3000, () => {
    console.log(`Acesse seu site http://localhost:3000`);
    console.log("🧙‍♂️ API dos Bruxos está no ar na porta 3000 !");
});