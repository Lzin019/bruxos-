const bruxos = [
       {
        "id": 1,
        "nome": "Harry Potter",
        "casa": "Grifinória",
        "ano": 7,
        "varinha": "Azevinho e pena de fênix, 28cm",
        "mascote":  "Coruja (Edwiges)",
        "patrono":  "Cervo",
       "especialidade": "Sobreviver a Voldemort 😎",
    },
    {
        "id": 2,
        "nome": "Hermione Granger",
        "casa": "Grifinória",
        "ano": 7,
        "varinha": "Videira e fibra de coração de dragão, 27cm",
        "mascote":  "Gato (Bichento)",
        "patrono":  "Lontra",
       "especialidade": "Saber tudo de tudo",
    },
    {
        "id": 3,
        "nome": "Ron Weasley",
        "casa": "Grifinória",
        "ano": 7,
        "varinha": "Salgueiro e crina de unicórnio, 35cm",
        "mascote":  "Rato (Perebas)",
        "patrono":  "Terrier Jack Russell",
       "especialidade": "Xadrez Bruxo",
    },
    {
        "id": 4,
        "nome": "Draco Malfoy",
        "casa": "Sonserina",
        "ano": 7,
        "varinha": "Espinheiro e crina de unicórnio, 25cm",
        "mascote":  "Coruja (não nomeada)",
        "patrono":  "Desconhecido",
       "especialidade": "Ser irritante",
    },
    {
        "id": 5,
        "nome": "Luna Lovegood",
        "casa": "Corvinal",
        "ano": 6,
        "varinha": "Madeira de cerejeira e núcleo desconhecido",
        "mascote":  "Nenhum",
        "patrono":  "Lebre",
       "especialidade": "Ver criaturas imaginárias (ou não) 👻",
    },
     {
        "id": 6,
        "nome": "Neville Longbottom",
        "casa": "Grifinória",
        "ano": 7,
        "varinha": "Cerejeira e pelo de unicórnio, 30cm",
        "mascote":  "Sapo (Trevor)",
        "patrono":  "Não conhecido",
       "especialidade": "Herbologia avançada",
    },
      {
        "id": 7,
        "nome": "Cho Chang",
        "casa": "Corvinal",
        "ano": 7,
        "varinha": "Salgueiro e fibra de coração de dragão, 23cm",
        "mascote":  "Coruja (não nomeada)",
        "patrono":  "Cisne",
       "especialidade": "Quadribol (Apanhadora)",
    },
    {
        "id": 8,
        "nome": "Cedrico Diggory",
        "casa": "Lufa-Lufa",
        "ano": 7,
        "varinha": "Freixo e pelo de unicórnio, 32cm",
        "mascote":  "Nenhum",
        "patrono":  "Não conhecido",
       "especialidade": "Cavalheirismo",
    },
    {
        "id": 9,
        "nome": "Bellatrix Lestrange",
        "casa": "Sonserina",
        "ano": 6,
        "varinha": "Nogueira e fibra de coração de dragão, 32cm",
        "mascote":  "Nenhum",
        "patrono":  "Não conhecido",
       "especialidade": "Artes das Trevas",
    },
    {
        "id": 10,
        "nome": "Minerva McGonagall",
        "casa": "Grifinória",
        "ano": 9,
        "varinha": "Abeto e fibra de coração de dragão, 24cm",
        "mascote":  "Gato",
        "patrono":  "Gato",
       "especialidade": "Transfiguração",
    },
    {
        "id": 11,
        "nome": "Julio",
        "casa": "Não conhecido",
        "ano": 5,
        "varinha": "Chifre de unicornio mágico",
        "mascote":  "Coruja",
        "patrono":  "Gato",
       "especialidade": "Transformação",
    },
    {
        "id": 12,
        "nome": "Marco",
        "casa": "Sonserina",
        "ano": 7,
        "varinha": "Madeira Sagrada do Eden",
        "mascote":  "Dragão Ivernal",
        "patrono":  "Cisne",
       "especialidade": "Mutação",
    },
    {
        "id": 13,
        "nome": "Luka",
        "casa": "Sonserina",
        "ano": 5,
        "varinha": "Varinha de aço",
        "mascote":  "Cachorro",
        "patrono":  "Cisne",
       "especialidade": "Agilidade",
    },
    {
        "id": 14,
        "nome": "Fernando",
        "casa": "Grifinória",
        "ano": 4,
        "varinha": "Cabo de Vassoura",
        "mascote": "Rato de fogo tridimensional",
        "patrono": "Desconhecido",
        "especialidade": "Falar com animais",
    },
    {
        "id": 15,
        "nome": "Yasmin C",
        "casa": "Sonserina",
        "ano": 4,
        "varinha": "Varinha de condão",
        "mascote": "Coruja das Neves",
        "patrono": "Gato",
        "especialidade": "Feitiços derivados",
    },
];

const casas = [
    {
       id: 1, 
       nome: "Corvinal", 
       fundadora: "Rowena Ravenclaw",
       cores: "Azul e Bronze",
       animal: "Águia"
    },
    {
        id: 2,
        nome: "Lufa-Lufa",
        fundadora: "Helga Hufflepuff",
        cores: "Amarelo e Preto",
        animal: "Texugo"
    },
    {
        id: 3,
        nome: "Sonserina", 
        fundadora: "Salazar Slytherin",
        cores: "Verde e Prata",
        animal: "Serpente"
    },
    {
        id: 4, 
        nome: "Grifinória", 
        fundadora: "Godric Gryffindor", 
        cores: "Vermelho e Dourado", 
        animal: "Leão"
    }
]

const varinhas = [
    {
      id: 1,
      material: "Azevinho", 
      nucleo: "Pena de Fênix", 
      comprimento: "28cm"
     },
     {
        id: 2,
        material: "Videira", 
        nucleo: "Fibra de Coração de Dragão", 
        comprimento: "27cm"
       },
       {
        id: 3,
        material: "Salgueiro", 
        nucleo: "Pelo de Unicórnio", 
        comprimento: "35cm"
       },
       {
        id: 4,
        material: "Carvalho Ingles", 
        nucleo: "Pelo de Testrálio", 
        comprimento: "32cm"
       },
];

const animais = [
    { 
      id: 1, 
      nome: "Coruja",
      tipo: "Correio/Companhia" 
    },
    { id: 2,
      nome: "Gato", 
      tipo: "Companhia" 
    },
    { id: 3, 
      nome: "Sapo",
tipo: "Companhia"
    },
    { id: 4, 
     nome: "Rato",
     tipo: "Companhia"
    }
];

const pocoes = [
    { id: 1,
      nome: "Polissuco",
      efeito: "Transforma na aparência de outra pessoa" 
    },
    { id: 2,
      nome: "Felix Felicis",
      efeito: "Sorte temporária"
    },
    { id: 3, 
      nome: "Amortentia",
      efeito: "Poção do amor" 
    },
    { id: 4, 
      nome: "Veritaserum",
      efeito: "Força a dizer a verdade" 
    }
];

export default { bruxos, casas, varinhas, animais, pocoes };