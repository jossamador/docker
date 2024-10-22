"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dotenv_1 = __importDefault(require("dotenv"));
// Cargar las variables de entorno desde el archivo .env
dotenv_1.default.config();
const sequelize = new sequelize_1.Sequelize(process.env.DB_NAME || 'todo_db', // Si process.env.DB_NAME es undefined, usará 'todo_db'
process.env.DB_USER || 'root', // Si process.env.DB_USER es undefined, usará 'root'
process.env.DB_PASSWORD || 'example', // Si process.env.DB_PASSWORD es undefined, usará 'example'
{
    host: process.env.DB_HOST || 'localhost', // Si process.env.DB_HOST es undefined, usará 'localhost'
    dialect: 'mysql',
});
// Exportar la instancia de Sequelize para usarla en otros archivos
exports.default = sequelize;
