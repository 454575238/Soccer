/*
* @Author: Marte
* @Date:   2018-02-23 14:27:36
* @Last Modified by:   Marte
* @Last Modified time: 2018-02-23 14:41:48
*/

var mongoose = require('mongoose');

var UserSchema = require('../schema/UserSchema.js');

var UserModel = mongoose.model('users',UserSchema);

module.exports = UserModel;