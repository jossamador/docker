import { Sequelize } from "sequelize";
import dotenv from 'dotenv';

// Cargar las variables de entorno desde el archivo .env
dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME || 'todo_db',        // Si process.env.DB_NAME es undefined, usará 'todo_db'
  process.env.DB_USER || 'root',           // Si process.env.DB_USER es undefined, usará 'root'
  process.env.DB_PASSWORD || 'example',    // Si process.env.DB_PASSWORD es undefined, usará 'example'
  {
    host: process.env.DB_HOST || 'localhost',  // Si process.env.DB_HOST es undefined, usará 'localhost'
    dialect: 'mysql',
  }
);

// Exportar la instancia de Sequelize para usarla en otros archivos
export default sequelize;
