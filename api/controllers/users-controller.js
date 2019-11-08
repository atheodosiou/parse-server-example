var express = require('express');
var router = express.Router();
var Parse = require('parse/node');

//============================ Parse Initialization ============================
Parse.initialize(process.env.APP_ID, process.env.JAVASCRIPT_KEY);
Parse.serverURL = process.env.SERVER_URL;
//==============================================================================

//Rutes
router.post('/signup', signUp)
router.post('/signin', signIn);

async function signUp(req, res) {
    var user = new Parse.User();
    user.set('username', req.body.username);
    user.set('password', req.body.password);
    user.set('email', req.body.email);

    user.signUp().then(function (user) {
        if(req.body.admin===true){
            var roleACL = new Parse.ACL();
            roleACL.setPublicReadAccess(true);
            roleACL.setPublicWriteAccess(true);
            roleACL.setWriteAccess(user,true);
            roleACL.setReadAccess(user,true);

            var role = new Parse.Role("Administrator", roleACL);
            role.getUsers().add(user);
            role.save().then(r=>{
                res.status(200).json({ message: 'User created successful with name: ' + user.get("username") + ' and email: ' + user.get("email"), role:roleACL });
            }).catch(reason=>{
                res.status(500).json({ error:reason})
            });
        }else{
            res.status(200).json({ message: 'User created successful with name: ' + user.get("username") + ' and email: ' + user.get("email")});
        }   
    }).catch(function (error) {
        res.status(error.status || 500).json({ 'error': "Error: " + error.code + " " + error.message })
    });
}

function signIn(req, res) {
    var user = Parse.User
        .logIn(req.body.username, req.body.password).then(function (user) {
            res.status(200).json({ 
                message: 'User loged in successfully: ' + user.get("username") + ' and email: ' + user.get("email"),
                sessionToken:user.sessionToken 
            });
        }).catch(function (error) {
            res.status(error.status || 500).json({ 
                error: "Error: " + error.code + " " + error.message 
            });
        });
}

module.exports = router;