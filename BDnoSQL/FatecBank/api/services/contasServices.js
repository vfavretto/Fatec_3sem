import { ObjectId } from "mongodb";

async function transferirFundos(client, deContaId, paraContaId, valor) {
  const session = client.startSession();
  try {
    await session.withTransaction(async () => {
      const contasCollection = client.db("fatecbank").collection("contas");
      
      if (valor <= 0) {
        throw new Error("Valor inválido para transferência");
      }

      // Verificar se as contas existem e têm saldo suficiente
      const contaOrigem = await contasCollection.findOne(
        { _id: ObjectId.createFromHexString(deContaId) },
        { session }
      );

      if (!contaOrigem) {
        throw new Error("Conta de origem não encontrada");
      }

      const contaDestino = await contasCollection.findOne(
        { _id: ObjectId.createFromHexString(paraContaId) },
        { session }
      );

      if (!contaDestino) {
        throw new Error("Conta de destino não encontrada");
      }

      const saldoAtual = contaOrigem.saldo_inicial + contaOrigem.movimentacoes.reduce((acc, mov) => {
        return acc + (mov.tipo === "credito" ? parseFloat(mov.valor) : -parseFloat(mov.valor));
      }, 0);

      if (saldoAtual < valor) {
        throw new Error("Saldo insuficiente para transferência");
      }

      // Atualizar conta de origem
      await contasCollection.updateOne(
        {
          _id: ObjectId.createFromHexString(deContaId),
        },
        {
          $push: {
            movimentacoes: {
              tipo: "debito",
              valor: valor.toString(),
              descricao: "Transferência para conta",
              data: new Date(),
            },
          },
        },
        { session }
      );

      // Atualizar conta de destino
      await contasCollection.updateOne(
        {
          _id: ObjectId.createFromHexString(paraContaId),
        },
        {
          $push: {
            movimentacoes: {
              tipo: "credito",
              valor: valor.toString(),
              descricao: "Transferência de conta",
              data: new Date(),
            },
          },
        },
        { session }
      );
    },
    {
      readConcern: { level: "majority" },
      writeConcern: { w: "majority" },
      maxCommitTimeMS: 5000
    });

    console.log("Transferência realizada com sucesso!");
    return { message: "Transferência realizada com sucesso!" };
  } catch (error) {
    //await session.abortTransaction();
    console.error("Erro ao realizar a transação:", error.message);
    return { error: error.message };
  } finally {
    await session.endSession();
  }
}

export { transferirFundos };