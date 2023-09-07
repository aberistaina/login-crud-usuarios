import Sequelize from "sequelize";
import dotenv from "dotenv"

dotenv.config()

let db = process.env.DB
let user = process.env.USER
let pass = process.env.PASS
let host = process.env.HOST

//Conexión a la Base de Datos
const sequelize = new Sequelize(db, user, pass, {
    host: host,
    dialect: "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 3000,
    }
});

export default sequelize;