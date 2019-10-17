var userName = 'xiecheng';
var time = Date.parse(new Date());
var data = {
    'username':userName,
    'regisTime':time
};
var db = connect('abc');
db.user.insert(data);
print('success');