use('fatecbank')

const contas = [{
    "numero": "12345",
    "nome": "João da Silva",
    "cpf": "123.234.345-98",
    "saldo_inicial": 10000.00,
    "movimentacoes": [
        {
            "tipo": "credito",
            "valor": "500.00",
            "descricao": "Deposito de dinheiro",
            "data": ISODate('2024-08-14T10:00:00Z')
        },
        {

            "tipo": "debito",
            "valor": "250.00",
            "descricao": "Pagamento CPFL",
            "data": ISODate('2024-08-18T10:00:00Z')
        }
    ]
},
{
    "numero": "67890",
    "nome": "Maria Silva",
    "cpf": "987.654.321-09",
    "saldo_inicial": 5000.00,
    "movimentacoes": [
        {
            "tipo": "credito",
            "valor": "1500.00",
            "descricao": "Compra de carro",
            "data": ISODate('2024-09-10T10:00:00Z')
        },
        {
            "tipo": "debito",
            "valor": "750.00",
            "descricao": "Pagamento boleto",
            "data": ISODate('2024-09-15T10:00:00Z')
        }
    ]
}
]

db.contas.insertMany(contas)

use('fatecbank')
db.contas.find()