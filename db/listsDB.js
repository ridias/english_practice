const path = require("path")
const Datastore = require("nedb")
const electron = require("electron")
const { remote } = electron

var ListsCRUD = () =>{
    this.db = {}
    this.db.lists = new Datastore({
        filename: path.join(remote.app.getPath('userData'), "db/lists.db"),
        autoload: true,
        onload: err =>{
            if(err) console.error("Error while loading the 'lists' db", err)
            this.db.lists.find({}, (err) =>{
                if(err) console.error("Something happen", err)
            })
        },
        timestampData: true
    })

    this.db.lists.ensureIndex({ fieldName: "num_words" }, (err) => { if(err) console.error("Error creating index: ", err)})
    this.db.lists.ensureIndex({ fieldName: "words" }, (err) => { if(err) console.error("Error creating index: " , err)})
}

ListsCRUD.prototype.find = (listJSON) => {
    return new Promise((resolve, reject) =>{
        this.db.lists.findOne(listJSON, (err, list) =>{
            if(err) reject(err)
            resolve(list)
        })
    })
}

ListsCRUD.prototype.findAll = () => {
    return new Promise((resolve, reject) =>{
        this.db.lists.find({}, (err, lists) =>{
            if(err) reject(err)
            resolve(lists)
        })
    })
}

ListsCRUD.prototype.insert = (listJSON) => {
    return new Promise((resolve, reject) =>{
        this.db.lists.insert(listJSON, (err, listInserted) =>{
            if(err) reject(err)
            resolve(listInserted)
        })
    })
}

ListsCRUD.prototype.update = (newListJSONtoUpdate) =>{
    return new Promise((resolve, reject) =>{
        this.db.lists.update({ _id: newListJSONtoUpdate._id }, newListJSONtoUpdate, {}, (err, numRowsReplaced) =>{
            if(err) reject(err)
            resolve(numRowReplaced)
        })
    })
}

ListsCRUD.prototype.delete = (idList) =>{
    return new Promise((resolve, reject) =>{
        this.db.lists.remove({ _id: idList }, {}, (err, numRowsRemoved) =>{
            if(err) reject(err)
            resolve(numRowsRemoved)
        })
    })
}

module.exports = ListsCRUD