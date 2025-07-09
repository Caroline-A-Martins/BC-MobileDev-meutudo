// Importa a função `connectToDatabase` do módulo database.mjs (apenas essa função específica)
import connectToDatabase from "./utils/database.mjs";
connectToDatabase("my-database");

// Importa *todo* o módulo database.mjs e coloca um "apelido" para o objeto chamado `database`
import * as database from "./utils/database.mjs";
database.connectToDatabase("my-database");
database.disconnectDatabase();

// Importa diretamente funções do arquivo database.mjs
import {
  connectToDatabase,
  disconnectDatabase,
  databaseType,
} from "./utils/database.mjs";
disconnectDatabase();

// Importação direta
import { getDataFromApi } from "./utils/api";
getDataFromApi();
