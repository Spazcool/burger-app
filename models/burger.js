// import ORM from '../config/orm.js';
const ORM = require('../config/orm.js');
const query = new ORM();

// todo might should inherit from orm
class Burger {
    constructor(){
    }
    selectAll(){
        return query.selectAll();
    }

    insertOne(name){
        // todo check for dupes
        return query.insertOne(name);
    }

    updateOne(id, state){
        return query.updateOne(id, state);
    }
}

module.exports = Burger;