var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/cards',function(req,res,next) {
  console.log("In cards");
  var fs = require('fs');
  fs.readFile(__dirname + '/cards.txt',function(err,data) {
            if(err) throw err;
            var Cards = data.toString().split("\n");
	    var roles = [];
            var images = [];
	    console.log(roles);
	    for(var i = 0; i < Cards.length; i++)
	    {
		var temp = Cards[i].split("-");
	        console.log(temp);
		roles[i] = temp[0];
		images[i] = temp[1];
	    }
            console.log(images);
            //var myRe = new RegExp("^" + req.query.q);
              console.log(req.query.q);
 	    var jsonresult = [];
            for(var i = 0; i < roles.length; i++) {
              var result = roles[i].search(req.query.q);
              if(result != -1) {
              console.log(roles[i]);
	      jsonresult.push({Cards:images[i]});
             }  
	    }
	     console.log(jsonresult); 
	     res.status(200).json(jsonresult); 
          })

});
module.exports = router;
