import { IUser } from "../controllers/user.interface";
import request from "supertest";
import app from "../index"

describe("Cadastro de usuario", () => {
  beforeAll(() => {
    //Antes de todos os testes
  });
  afterAll(() => {
    //Depois de todos os testes
  });
  beforeEach(() => {
    //Antes de cada teste
  });
  afterEach(() => {
    //Depois de cada teste
  });
  it.skip("Deve retornar um usuario", () => {
    //Teste que verifica se a função getUser retorna um usuario
    const user: IUser = {
      id: 1,
      name: "João Jorge",
      age: 18,
    };
  });
  it("Deve retornar sucesso, se os parametros estiverem corretos", () => {
    expect(null).toBeNull();
  });
});

it("Deve retornar todos os usuarios cadastrados a partir do ID, se sucesso", async () => {
  // const users = ["João", "Daniel", "Maycon"];
  // expect(users).toContainEqual<string>("João");

  const response = await request(app).get("/api/v1/user/1");
  expect(response.text).toEqual(
      JSON.stringify({
      id: 1,
      name: "João Jorge",
      age: 18,
    }))
});

describe("Cadastro de usuario", () => {
  it("Deve retornar sucesso, se os parametros estiverem corretos", () => {
    expect(null).toBeNull();
  });
});

//Faça um teste para somar dois numeros
describe("Soma", () => {
  it("Deve somar dois numeros", () => {
    expect(1 + 1).toBe(2);
  });
})

//Faça em que dois números devem ser maiores que 0
describe("Soma", () => {
  it("Deve somar dois numeros", () => {
    expect(1 + 1).toBeGreaterThan(0);
  });
})

