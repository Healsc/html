var db=require('./db.js');
exports.insert_data=function(name,pass,callback){
  var sql="insert into t_users(pass,name) values(?,?)";
  db.query(sql,[name,pass],callback)
}


/* var mysql=require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'blog'
});
var pool  = mysql.createPool({
  connectionLimit : 10,
  host            : 'localhost',
  user            : 'root',
  password        : '',
  database        : 'blog'
}); */
/* exports.insert_data=function(callback){
    connection.connect();
    connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
    if (error) throw error;
    //console.log('The solution is: ', results[0].solution);
    callback(error,results);
    connection.end();
    })
} */
/* exports.inset_data=function(name,pass,callback){
  pool.getConnection(function(err, connection) {
    if (err) throw err; // not connected!
   
    // Use the connection
    connection.query('SELECT * FROM t_users', function (error, results, fields) {
      // When done with the connection, release it.
      connection.release();
   
      // Handle error after the release.
      if (error) throw error;
      callback(error,results);
      // Don't use the connection here, it has been returned to the pool.
    });
  });
} */