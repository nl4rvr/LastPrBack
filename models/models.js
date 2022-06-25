const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const { INTEGER, STRING } = DataTypes;

const Book = sequelize.define('Book', {
  id: { type: INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: STRING, allowNull: false },
  price: { type: STRING, allowNull: false },
  comment: { type: STRING, allowNull: false },
  typeBook: { type: STRING, allowNull: false },
  picture: { type: STRING, allowNull: false }
});

const Partner = sequelize.define('Partner', {
  id: { type: INTEGER, primaryKey: true, autoIncrement: true },
  logo: { type: STRING, allowNull: false },
  name: { type: STRING, allowNull: false },
  comment: { type: STRING, allowNull: false }
});

const Skill = sequelize.define('Skill', {
  id: { type: INTEGER, primaryKey: true, autoIncrement: true },
  numberSkill: { type: STRING, allowNull: false },
  text: { type: STRING, allowNull: false }
});

const Article = sequelize.define('Article', {
  id: { type: INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: STRING, allowNull: false },
  comment: { type: STRING, allowNull: false },
  date: { type: STRING, allowNull: false },
  picture: { type: STRING, allowNull: false }
});

module.exports = { Book, Partner, Skill, Article };
