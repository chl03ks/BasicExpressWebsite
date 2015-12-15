var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET contact page. */
router.get('/', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

router.post('/send', function (req, res, next) {

    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'udevelopd@gmail.com',
            pass: 'm49wapdaniel'
        },

    });

    var mailOptions = {
        from: 'John Doe <johndoe@outlook.com>',
        to: 'udevelopd@gmail.com',
        subjetc: 'Website Contact',
        text: 'You have a new submission with the following details....Name: ' +
               req.body.name + ' Email:'+ req.body.email + ' Message:' + req.body.message,
        html: '<h1> You have a new mail from:</h1> ' + req.body.name,
    };

    transporter.sendMail(mailOptions, function(err, info){
        if (err) console.log(err);
        res.redirect('/');
    });
});

module.exports = router;
