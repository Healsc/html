var mysql=require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'blog'
});

exports.insert_data=function(callback){
    connection.connect();
    connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
    if (error) throw error;
    //console.log('The solution is: ', results[0].solution);
    callback(error,results);
    connection.end();
    })
}