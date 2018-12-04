const path = require("path")
const Datastore = require("nedb")
const electron = require("electron")
const { remote } = electron

var PracticesCRUD = () =>{
    this.db = {}
    this.db.practices = new Datastore({
        filename: path.join(remote.app.getPath('userData'), "db/practices.db"),
        autoload: true,
        onload: err =>{
            if(err) console.error("Error while loading the 'practices' db", err)
            this.db.practices.find({}, (err) =>{
                if(err) console.error("Something happen", err)
            })
        },
        timestampData: true
    })

    this.db.practices.ensureIndex({ fieldName: "correct_answers" }, (err) => { if(err) console.error("Error creating index: ", err)})
    this.db.practices.ensureIndex({ fieldName: "wrong_answers" }, (err) => { if(err) console.error("Error creating index: " , err)})
    this.db.practices.ensureIndex({ fieldName: "type" }, (err) => { if(err) console.error("Error creating index: " , err)})
}

PracticesCRUD.prototype.find = (practiceJSON) => {
    return new Promise((resolve, reject) =>{
        this.db.practices.findOne(practiceJSON, (err, practice) =>{
            if(err) reject(err)
            resolve(practice)
        })
    })
}

PracticesCRUD.prototype.findAll = () => {
    return new Promise((resolve, reject) =>{
        this.db.practices.find({}, (err, practices) =>{
            if(err) reject(err)
            resolve(practices)
        })
    })
}

PracticesCRUD.prototype.insert = (practiceJSON) => {
    return new Promise((resolve, reject) =>{
        this.db.practices.insert(practiceJSON, (err, practiceInserted) =>{
            if(err) reject(err)
            resolve(practiceInserted)
        })
    })
}

PracticesCRUD.prototype.update = (newPracticeJSONtoUpdate) =>{
    return new Promise((resolve, reject) =>{
        this.db.practices.update({ _id: newPracticeJSONtoUpdate._id }, newPracticeJSONtoUpdate, {}, (err, numRowsReplaced) =>{
            if(err) reject(err)
            resolve(numRowsReplaced)
        })
    })
}

PracticesCRUD.prototype.delete = (idPractice) =>{
    return new Promise((resolve, reject) =>{
        this.db.practices.remove({ _id: idPractice }, {}, (err, numRowsRemoved) =>{
            if(err) reject(err)
            resolve(numRowsRemoved)
        })
    })
}

module.exports = PracticesCRUD