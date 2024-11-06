import express from "express";
import { MONGODB_DB, connectToDatabase } from "../config/db.js";
import { transferirFundos } from '../services/contasServices.js'

const router = express.Router();

router.get("/", async (req, res) => {
  let client;
  try {
    client = await connectToDatabase();
    const contasCollection = client.db(MONGODB_DB).collection("contas");

    const contas = await contasCollection
      .find({}, { projection: { saldo_inicial: 1, numero: 1, nome: 1, cpf: 1 } })
      .toArray();
    res.status(200).json(contas);
  } catch (error) {
    res.status(500).json({
      error: `Erro ao obter as contas: ${error.message}`,
    });
  }
});

router.post("/transferir", async (req, res) => {
  const { deContaId, paraContaId, valor } = req.body;
  let client;

  // Validação dos campos obrigatórios
  if (!deContaId || !paraContaId || !valor) {
    return res.status(400).json({
      error: "Todos os campos são obrigatórios: deContaId, paraContaId e valor"
    });
  }

  try {
    client = await connectToDatabase();
    const result = await transferirFundos(
      client,
      deContaId,
      paraContaId,
      parseFloat(valor)
    );

    if (result.error) {
      return res.status(400).json({ error: result.error });
    }
    
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({
      error: `Erro ao transferir fundos: ${error.message}`,
    });
  }
});

export default router;