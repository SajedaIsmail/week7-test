const connection=require('./connection');
const {join}= require('path');
const {readFileSync}=require('fs');

const sql=readFileSync(join(__dirname,'build.sql')).toString();

  connection
  .query(sql)
  .then(res=> console.log('Build Successfully'))
  .catch(error=> console.log(error.stack))


module.exports={connection};