//Exportações indiretas
//----------------------//

// Define um objeto chamado `databaseType` que armazena configurações do banco de dados
const databaseType = {
  userType: "admin",
  typeData: "datalocal",
};

// Função assíncrona para conectar ao banco de dados
async function connectToDatabase(dataName) {
  console.log("Conectando ao banco: " + dataName);
}

// Função assíncrona para desconectar do banco de dados
async function disconnectDatabase(dataName) {
  console.log("Desconectando do banco");
}

// Exportação padrão do módulo: ao importar sem chaves, apenas essa função será usada
export default connectToDatabase;

// Exportação nomeada: permite importar essas funções específicas com chaves { connectToDatabase, disconnectDatabase }
export { connectToDatabase, disconnectDatabase, databaseType };
