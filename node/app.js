/*
* @Author: Marte
* @Date:   2018-02-22 16:18:54
* @Last Modified by:   Marte
* @Last Modified time: 2018-02-24 15:47:20
*/
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var UserModel = require('./model/UserModel.js');
 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({extended:true}));

 mongoose.connect("mongodb://127.0.0.1:27017/users").then(function(){
    console.log("数据库连接成功");
 })
//校验数据库中是否存在用户名和密码
app.post('/api/login',function(req,res){
 UserModel.find(req.body,function(err,doc){
    if(err){
        console.log(err)
        return;
    }else if(!doc.length){
        res.json({
            code:1
        })
    }else{
            res.json({code:0,msg:doc})
        }

 })

})

//注册向数据库中添加用户数据
app.post('/api/register',function(req,res){
    let {user} = req.body;
    UserModel.find({user},function(err,doc){
        if(!doc.length){
            var d = new UserModel(req.body);

         d.save(function(err,doc){
            if(err){
                console.log(err)
                return
            }else{
                res.json({
                    code:0,
                    msg:"注册成功"
                })
            }
         });


        }else{
            res.json({
                code:1,
                msg:"你输入的用户名已经被注册"
            })
        }
    })

})
//获取数据
app.post('/api/users',function(req,res){
    UserModel.find({},function(err,doc){
        if(err){
            console.log(err)
            return
        }else{
            res.json({
                code:0,
                msg:doc
            })
        }
    })
})


app.listen(8090,function(){
    console.log("链接成功")
})