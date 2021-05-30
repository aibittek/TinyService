const mongoose = require ('mongoose');

let url = 'mongodb://45.67.223.227:27017';
mongoose.connect (url, {
    // user: 'admin',
    // pass: 'pass',
    useNewUrlParser: true,
    // useUnifiedTopology: true
});

mongoose.connection.on ('connected', function (s) {
    console.log ('连接到mongodb成功');
});
mongoose.connection.on ('error', function (e) {
    console.log (e);
});

module.exports = mongoose;