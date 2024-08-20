const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

let nomes = [];
let notas = [];

app.get('/', (req, res) => {
  res.json(nomes)
})

app.post('/', (req, res) => {
  let nome = req.body.nome;
  nomes.push(nome);
  res.send(`Nome: ${nome}`)
})

app.post('/exercicio', (req, res) => {
  const valorConvertido = Converte(req.body.tipo, req.body.temperatura)
  res.send(valorConvertido)
})

app.post('/exercicio2', (req, res) => {
  notas.push(req.body.nota);
  res.send()
})

app.get('/exercicios2', (req, res) => {
  res.send(MediaNotas(req.body.notas))
})

function MediaNotas(notas, qntAlunos) {
  
}

function Converte(tipo, temperatura) {
  let farenheit;
  let celsius;
  let tipinho = tipo.toLowerCase()
  switch (tipinho) {
    case ('c'):
      farenheit = (9 * temperatura / 5) + 32
      return (`A temperatura ${temperatura}${tipo}º converte em ${farenheit}Fº`)
    case ('f'):
      celsius = (5 * (temperatura - 32) / 9)
      return (`A temperatura ${temperatura}${tipo}º converte em ${celsius}Cº`)
  }
}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})