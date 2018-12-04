const path = require("path")
const Datastore = require("nedb")
const electron = require("electron")
const { remote } = electron

var WordsCRUD = function(){
    this.db = {}
    this.db.words = new Datastore({
        filename: path.join(remote.app.getPath('userData'), "db/words.db"),
        autoload: true,
        onload: err =>{
            if(err) console.error("Error while loading the 'words' db", err)
            this.db.words.find({}, (err) =>{
                if(err) console.error("Something happen", err)
            })
        },
        timestampData: false
    })

    this.db.words.ensureIndex({ fieldName: "word", unique: true }, (err) => { if(err) console.error("Error creating index: ", err)})
    this.db.words.ensureIndex({ fieldName: "traduction" }, (err) => { if(err) console.error("Error creating index: " , err)})
    this.db.words.ensureIndex({ fieldName: "pronunciation" }, (err) => { if(err) console.error("Error creating index: ", err)})
}

WordsCRUD.prototype.find = (wordJSON) => {
    return new Promise((resolve, reject) =>{
        this.db.words.findOne(wordJSON, (err, word) =>{
            if(err) reject(err)
            resolve(word)
        })
    })
}

WordsCRUD.prototype.findAll = () => {
    return new Promise((resolve, reject) =>{
        this.db.words.find({}, (err, words) =>{
            if(err) reject(err)
            resolve(words)
        })
    })
}

WordsCRUD.prototype.insert = (wordJSON) => {
    return new Promise((resolve, reject) =>{
        this.db.words.insert(wordJSON, (err, wordInserted) =>{
            if(err) reject(err)
            resolve(wordInserted)
        })
    })
}

WordsCRUD.prototype.update = (newWordJSONtoUpdate) =>{
    return new Promise((resolve, reject) =>{
        this.db.words.update({ _id: newWordJSONtoUpdate._id }, newWordJSONtoUpdate, {}, (err, numRowsReplaced) =>{
            if(err) reject(err)
            resolve(numRowReplaced)
        })
    })
}

WordsCRUD.prototype.delete = (idWord) =>{
    return new Promise((resolve, reject) =>{
        this.db.words.remove({ _id: idWord }, {}, (err, numRowsRemoved) =>{
            if(err) reject(err)
            resolve(numRowsRemoved)
        })
    })
}

module.exports = WordsCRUD