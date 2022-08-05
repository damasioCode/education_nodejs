import { Sequelize, Model, DataTypes } from "sequelize";

import sequelize from './../database/index.js'

const Student = sequelize.define("students", {
  id: {
    type: DataTypes.INTEGER,
    required: true,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    required: true
  },
  email: {
    type: DataTypes.STRING,
    required: true
  },
  ra: {
    type: DataTypes.INTEGER,
    required: true,
    unique: true
  },
  cpf: {
    type: DataTypes.STRING,
  },
});

export default Student