"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todoRoutes_1 = __importDefault(require("./routes/todoRoutes"));
const models_1 = __importDefault(require("./models"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(todoRoutes_1.default);
// Conectar a la base de datos
models_1.default.sync().then(() => {
    console.log('Database synced');
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
});
