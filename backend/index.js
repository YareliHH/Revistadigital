require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Importación de las rutas 
const noticiaRoutes = require('./routes/noticiaRoutes');
const tecnologiaRoutes = require('./routes/tecnologiasRoutes');
const cienciaRoutes = require('./routes/cienciaRoutes');
const ingenieriaRoutes = require('./routes/ingenieriaRoutes');
const computacionRoutes = require('./routes/computacionRoutes');
const revistasRoutes = require('./routes/revistasRoutes');

const app = express(); 
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Conectado a la base de datos MongoDB'))
  .catch(err => console.error('Error de conexión a MongoDB:', err));

// Rutas
app.use('/api/noticias', noticiaRoutes);
app.use('/api/tecnologias', tecnologiaRoutes);
app.use('/api/ciencias', cienciaRoutes);
app.use('/api/ingenieria', ingenieriaRoutes);
app.use('/api/computacion', computacionRoutes);
app.use('/api/revistas', revistasRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
