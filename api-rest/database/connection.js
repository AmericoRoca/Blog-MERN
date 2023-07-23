const mongoose = require('mongoose');

const connection = async () => {
  try {
    await mongoose.connect("mongodb+srv://blog_mern:blog_mern@blog-mern.n3lp1tx.mongodb.net/", {
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
