const Pool = require('pg').Pool
const pool = new Pool({
 host: 'ec2-54-170-123-247.eu-west-1.compute.amazonaws.com',
  database: 'd2qjsc65om55tt',
  user:'bimwotepgajnym',
  password: 'df530bebca52aa85165c78d495d2e1fd0b6daba23432394db008b5c6c73310ce',
  port: 5432,
  ssl:{rejectUnauthorized:false},
})
const getGoods = (request, response) => {
    response.header("Access-Control-Allow-Origin", "*");
    pool.query('SELECT * FROM public.goods ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getGoodById = (request, response) => {
  const id = parseInt(request.params.id)
    response.header("Access-Control-Allow-Origin", "*");
    pool.query('SELECT * FROM public.goods WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}







module.exports = {
  getGoods,
  getGoodById  
}