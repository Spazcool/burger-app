import connection from 'conneciton.js';

class ORM {
    constructor(){
        this.connection = connection;
    }
    
    selectAll(){
        return this.connection.query('SELECT * FROM burgers;');
    }

    insertOne(value){
        return this.connection.query('INSERT INTO burgers burger_name VALUES (?);', [value]);
    }

    updateOne(id){
        return this.connection.query('UPDATE burgers SET devoured = true WHERE id = ?;', [id]);
    }
}

module.exports = ORM;