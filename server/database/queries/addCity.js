const connection= require ('../config/connection');

const addCity=(data) => {
  return connection.query('insert into cities (username,city) values ($1,$2) returning *', 
  [data.name, data.city]);
}


module.exports= {addCity};
