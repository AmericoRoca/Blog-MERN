const mongoose = require('mongoose');

const connection = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/blog_mern", {
      connectTimeoutMS: 5000, // Tiempo de espera de conexión de 5 segundos
      socketTimeoutMS: 30000 // Tiempo de espera de socket de 30 segundos
    });
    console.log("Database connected!");
  } catch (error) {
    console.log(error);
    throw new Error("No se puede conectar a la base de datos");
  }
};

module.exports = {
  connection
};
