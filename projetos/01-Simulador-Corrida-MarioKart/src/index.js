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

async function getRandomBlock() {
  let random = Math.random();
  let result;

  switch (true) {
    case random < 0.33:
      result = "RETA";
      break;
    case random < 0.66:
      result = "CURVA";
      break;
    default:
      result = "CONFRONTO";
  }
}

async function playRaceEngine(character1, character2) {
  for (let round = 1; round <= 5; round++) {
    console.log(`🏁Rodada ${round}`);

    //sortear bloco
    let block = await getRandomBlock();
    console.log(`Bloco: ${block}`);

    //rolar dados
    let diceResult1 = await rollDice();
    let diceResult2 = await rollDice();

    //teste de habilidade
    let totalTesteSkill1 = 0;
    let totalTesteSkill2 = 0;
  }
}

/*Logica de "Rolar os dados" */
async function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

(async function main() {
  console.log(
    `🏁🚨 Corrida entre ${player1.NOME} e ${player2.NOME} está começando ...\n`
  );
  await playRaceEngine(player1, player2);
})();
