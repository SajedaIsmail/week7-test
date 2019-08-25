const { getCities} = require("../database/queries/getCities");
const { addCity } = require("../database/queries/addCity");

const get = (req, res) => {
  getCities()
    .then(result => {
      res.json(result.rows);
    })
    .catch(err => console.log("err:", err));
};

const add = (req, res) => {
  addCity(req.body)
    .then(() => res.redirect("/"))
    .catch(err => console.log("err:", err));
};
module.exports={get,add};