var url = require('url');
var _ = require('lodash');
var contacts = require('../modules/contacts.es6');
var express = require('express');
var router = express.Router();

router.get('/', (req, res)=>{
    var getParams = url.parse(req.url, true).query;

    if(_.values(getParams).length == 0){
        res.setHeader('content-type', 'application/json');
        res.end(JSON.stringify(contacts.list()));
    }else{
        res.setHeader('content-type', 'application/json');
        res.end(JSON.stringify(
            contacts.query_by_arg(getParams.arg, getParams.value)
        ))
    }
});

router.get('/:number', function(request, response) {
    response.setHeader('content-type', 'application/json');
    console.log(request.params, '<<<<<<<')
    response.end(JSON.stringify(contacts.query(request.params.number)));
});

module.exports = router;