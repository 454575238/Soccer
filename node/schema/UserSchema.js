/*
* @Author: Marte
* @Date:   2018-02-23 14:27:24
* @Last Modified by:   Marte
* @Last Modified time: 2018-02-23 15:24:16
*/

var mongoose = require('mongoose');
var UserSchema = mongoose.Schema({
    user:String,
    pwd:String,
    imgs:String,
    pay:String,
    nick:String
})

module.exports = UserSchema;