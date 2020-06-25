// import connection from 'connection.js';
const connection = require('./connection.js');

class ORM {
    constructor(){
        this.connection = connection;
    }
    
    selectAll(){
        return this.connection.query('SELECT * FROM burgers;');
    }

    insertOne(value){
        return this.connection.query('INSERT INTO burgers (burger_name, devoured) VALUES (?, false);', [value]);
    }

    updateOne(id, devoured){
        return this.connection.query('UPDATE burgers SET devoured = ? WHERE id = ?;', [devoured, id]);
    }
}

module.exports = ORM;