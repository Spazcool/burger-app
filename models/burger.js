import ORM from '../config/orm.js';
const query = new ORM();

function selectAll(){
    return query.selectAll();
}

function insertOne(name){
    // todo check for dupes
    return query.insertOne(name);
}

function updateOne(ID){
    return query.updateOne(ID);
}

module.exports = burger;