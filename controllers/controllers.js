const { Book, Partner, Skill, Article } = require('../models/models');

class Controllers {
  async findBooks(req, res) {
    const books = await Book.findAll();
    return res.send(books);
  }

  async findPartners(req, res) {
    const books = await Partner.findAll();
    return res.send(books);
  }

  async findSkills(req, res) {
    const books = await Skill.findAll();
    return res.send(books);
  }

  async findArticles(req, res) {
    const books = await Article.findAll();
    return res.send(books);
  }
}

module.exports = new Controllers();
