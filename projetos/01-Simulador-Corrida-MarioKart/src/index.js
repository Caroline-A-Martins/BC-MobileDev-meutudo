const player1 = {
  NOME: "Mario",
  VELOCIDAE: 4,
  MANOBRALIDADE: 3,
  PODER: 3,
  PONTOS: 0,
};

const player2 = {
  NOME: "Luigi",
  VELOCIDAE: 3,
  MANOBRALIDADE: 4,
  PODER: 4,
  PONTOS: 0,
};

const player3 = {
  NOME: "Peach",
  VELOCIDAE: 3,
  MANOBRALIDADE: 4,
  PODER: 2,
  PONTOS: 0,
};

const player4 = {
  NOME: "Yoshi",
  VELOCIDAE: 2,
  MANOBRALIDADE: 4,
  PODER: 3,
  PONTOS: 0,
};

const player5 = {
  NOME: "Browser",
  VELOCIDAE: 5,
  MANOBRALIDADE: 2,
  PODER: 5,
  PONTOS: 0,
};

const player6 = {
  NOME: "Donkey Kong",
  VELOCIDAE: 2,
  MANOBRALIDADE: 2,
  PODER: 5,
  PONTOS: 0,
};

/*Logica de "Rolar os dados" */
async function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

