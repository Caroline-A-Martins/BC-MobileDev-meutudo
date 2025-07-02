const player1 = {
  NOME: "Mario",
  VELOCIDADE: 4,
  MANOBRALIDADE: 3,
  PODER: 3,
  PONTOS: 0,
};

const player2 = {
  NOME: "Luigi",
  VELOCIDADE: 3,
  MANOBRALIDADE: 4,
  PODER: 4,
  PONTOS: 0,
};

const player3 = {
  NOME: "Peach",
  VELOCIDADE: 3,
  MANOBRALIDADE: 4,
  PODER: 2,
  PONTOS: 0,
};

const player4 = {
  NOME: "Yoshi",
  VELOCIDADE: 2,
  MANOBRALIDADE: 4,
  PODER: 3,
  PONTOS: 0,
};

const player5 = {
  NOME: "Bowser",
  VELOCIDADE: 5,
  MANOBRALIDADE: 2,
  PODER: 5,
  PONTOS: 0,
};

const player6 = {
  NOME: "Donkey Kong",
  VELOCIDADE: 2,
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
  return result;
}

async function logRollResult(characterName, block, diceResult, attribute) {
  console.log(
    `${characterName} 🎲 rolou o dado de ${block} ${diceResult} + ${attribute} = ${
      diceResult + attribute
    }`
  );
}

async function playRaceEngine(character1, character2) {
  for (let round = 1; round <= 5; round++) {
    console.log(`🏁 Rodada ${round}`);

    // sortear bloco
    let block = await getRandomBlock();
    console.log(`Bloco: ${block}`);

    // rolar dados
    let diceResult1 = await rollDice();
    let diceResult2 = await rollDice();

    // teste de habilidade
    let totalTesteSkill1 = 0;
    let totalTesteSkill2 = 0;

    if (block === "RETA") {
      totalTesteSkill1 = diceResult1 + character1.VELOCIDADE;
      totalTesteSkill2 = diceResult2 + character2.VELOCIDADE;

      await logRollResult(
        character1.NOME,
        "velocidade",
        diceResult1,
        character1.VELOCIDADE
      );
      await logRollResult(
        character2.NOME,
        "velocidade",
        diceResult2,
        character2.VELOCIDADE
      );
    }

    if (block === "CURVA") {
      totalTesteSkill1 = diceResult1 + character1.MANOBRALIDADE;
      totalTesteSkill2 = diceResult2 + character2.MANOBRALIDADE;

      await logRollResult(
        character1.NOME,
        "manobralidade",
        diceResult1,
        character1.MANOBRALIDADE
      );
      await logRollResult(
        character2.NOME,
        "manobralidade",
        diceResult2,
        character2.MANOBRALIDADE
      );
    }

    if (block === "CONFRONTO") {
      let powerResult1 = diceResult1 + character1.PODER;
      let powerResult2 = diceResult2 + character2.PODER;

      console.log(`${character1.NOME} confrontou ${character2.NOME} 🥊`);

      await logRollResult(
        character1.NOME,
        "poder",
        diceResult1,
        character1.PODER
      );

      await logRollResult(
        character2.NOME,
        "poder",
        diceResult2,
        character2.PODER
      );

      if (powerResult1 > powerResult2 && character2.PONTOS > 0) {
				console.log(`${character1.NOME} venceu o confronto! ${character2.NOME} perdeu 1 ponto 🐢`);
        character2.PONTOS--;
      }

      if (powerResult2 > powerResult1 && character1.PONTOS > 0) {
        console.log(`${character2.NOME} venceu o confronto! ${character1.NOME} perdeu 1 ponto 🐢`);
				character2.PONTOS--;
      }

      console.log(
        powerResult1 === powerResult2
          ? "Confronto empatado! Nenhum ponto foi perdido"
          : ""
      );
    }

    //verificando vencedor
    if (totalTesteSkill1 > totalTesteSkill2) {
      console.log(`${character1.NOME} marcou um ponto!`);
      character1.PONTOS++;
    } else if (totalTesteSkill2 > totalTesteSkill1) {
      console.log(`${character2.NOME} marcou um ponto!`);
      character2.PONTOS++;
    }
    console.log(`Total de pontos ${character1.NOME}: ${character1.PONTOS}`);
    console.log(`Total de pontos ${character2.NOME}: ${character2.PONTOS}\n`);
    console.log("------------------------------------------------");
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
