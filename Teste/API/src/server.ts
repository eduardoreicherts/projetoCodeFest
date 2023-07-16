const express = require('express');
import {config} from 'dotenv';
const bodyParser = require("body-parser")
const cors = require('cors')

const fs = require("fs/promises")

const database = require("../database.json")
// IMPORTA O ARQUIVO DE BANCO DE DADOS


let lista = database
// CRIO UMA LET PARA MANIPULAR

config();

const app = express();
const port = process.env.PORT || 3333;

app.use(express.json())
// linha para permissão de alterar json 
app.use(cors());

app.get('/getCpf', (request: any, response: any) => {
    let cpf = request.body.cpf;
    response.send(lista);
});

app.get('/cadastro', (request: any, response: any) => {
    response.send(lista);
});


app.post("/salvar", (request: any, response: any) => {
    console.log(request.body)
    const user = {
        id: lista.length + 1 || "",
        nome: request.body.nome || "",
        idade: request.body.idade || "",
        email: request.body.email || "",
        telefone: request.body.telefone || "",
        cpf: request.body.cpf || "",
        dataNascimento: request.body.dtNascimento || "",
        rg: request.body.rg || "",
        ocupacao: request.body.dtOcupacao|| "",
        cep: request.body.cep|| "",
        numero: request.body.numero|| "",
        bairro: request.body.bairro|| "",
        necessidades: request.body.necessidades|| "",
        estado: request.body.estado|| ""

    }

    lista.push(user)

    fs.writeFile("database.json", JSON.stringify(lista))

    response.send("Salvo com sucesso")

})

app.listen(port, () => {
    console.log(`Servidor rodando com sucesso na porta ` + port);
});
