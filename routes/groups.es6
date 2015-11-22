var url = require('url');
var _ = require('lodash');
var contacts = require('../modules/contacts.es6');
var express = require('express');
var router = express.Router();

router.get('/', (req, res)=>{
    console.log ('groups');
    res.setHeader('content-type', 'application/json');
    res.end(JSON.stringify(contacts.list_groups()));
});

module.exports = router;