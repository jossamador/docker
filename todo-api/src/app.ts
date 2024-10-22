import express from 'express';
import todoRoutes from './routes/todoRoutes';  // Ajusta según tu estructura de carpetas
import sequelize from './models';  // Asegúrate de que 'models/index.ts' exporte la instancia de Sequelize

const app = express();

app.use(express.json());

// Usar las rutas de tareas
app.use(todoRoutes);

// Conectar a la base de datos y levantar el servidor
sequelize.sync().then(() => {
   console.log('Base de datos sincronizada');
   app.listen(3000, () => {
       console.log('Servidor corriendo en el puerto 3000');
   });
}).catch((error) => {
   console.error('Error al sincronizar la base de datos:', error);
});
