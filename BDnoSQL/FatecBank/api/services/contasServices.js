import { ObjectId } from "mongodb";

async function transferirFundos(client, deContasId, paraContaID, valor) {
  const session = client.startSession();
  try {
    await session.withTransaction(async () => {
      const contasCollection = client.db("fatecbank").collection("contas");
      if (valor < 0) {
        throw new Error("Valor inválido para transferência");
      }
      await contasCollection.updateOne(
        {
          _id: ObjectId.createFromHexString(deContasId),
        },
        {
          $push: {
            movimentacoes: {
              tipo: "debito",
              valor: valor,
              descricao: "Transferência para conta",
              data: new Date(),
            },
          },
        }
      );
      await contasCollection.updateOne(
        {
          _id: ObjectId.createFromHexString(paraContaID),
        },
        {
          $push: {
            movimentacoes: {
              tipo: "credito",
              valor: valor,
              descricao: "Transferência de conta",
              data: new Date(),
            },
          },
        }
      )
    },
    {
        readConcern: { level: "mojority" },
        writeConcern: { w: "majority" },
        maxCommitTimeMS: 5000 //5secs
    })
    await session.commitTrasaction()
    console.log("Transferência realizada com sucesso!");
    return { message: "Transferência realizada com sucesso!" };
  } catch (error) {
    //await session.abortTrasaction
    console.error("Erro ao iniciar a transação:", err.message);
    return { error: `Erro ao transferir fundos: ${error.message}` };
  } finally {
    session.endSession()
  }
}
