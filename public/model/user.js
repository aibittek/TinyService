var mongoose = require('../../db/dbmongo');
var Schema = mongoose.Schema;
var userSchema = new Schema({
    username: String,       // 用户名
    password: String,       // 密码
    portrait: String,       // 头像
    nickname: String,       // 昵称
    backgoundPic: String,   // 背景图像
    selfsign: String,       // 签名
},{
    timestamps: {
        createdAt: 'createtime',   // 创建时间
        updatedAt: 'updattime'     // 升级时间
    }});
var schema = mongoose.model('User',userSchema);
module.exports = schema;
