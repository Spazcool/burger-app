import ORM from '../config/orm.js';
const query = new ORM();

let ID = 2;
query.selectAll();
query.insertOne('NAME_OF_BURGER');
query.updateOne(ID)

module.exports = burger;