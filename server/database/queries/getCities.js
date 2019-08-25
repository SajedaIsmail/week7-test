const connection= require('../config/connection');

const getCities= ()=>{
  return connection.query('select * from cities');
}

module.exports= {getCities};