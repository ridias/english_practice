const ListsDB = require('./listsDB')
const PracticesDB = require('./practicesDB')
const WordsDB = require('./wordsDB')

var Database = function(){

}

Database.listsDB = new ListsDB()
Database.practicesDB = new PracticesDB()
Database.wordsDB = new WordsDB()

module.exports = Database