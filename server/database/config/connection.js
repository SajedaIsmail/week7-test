const {Pool}=require('pg');
require('env2')('./config.env');
let DB_URL=process.env.DB_URL;
//  if (process.env.NODE_ENV== 'development'){
//    DB_URL= process.env.DB_URL;
//  }
//  else {
//    DB_URL=process.env.HEROKU_DB_URL;
//  }
 const options = {
   connectionString : DB_URL,
   ssl:true
 }
module.exports= new Pool(options);

