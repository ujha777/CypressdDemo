const nodemailer =require('nodemailer')

let transporter=nodemailer.createTransport({
    host:'smtprelay.greenwayhealth.com',
    port:'25',
    secure:false,
    logger:true,
    debug:true,
    ignoreTLS:true,
    service:"greenwayhealth.com",
    tls:{
        rejectUnauthorized:true
    }
})

let mailOptions={
    from:"gangesh.jha@greenwayhealth.com",
    to:"ujha777@gmail.com",
    subject:"testing",
    text:"3rd mail is testing"
}

transporter.sendMail(mailOptions,function(err,success){
if(err){
    console.log(err && err.stack);
}
else{
    console.log('email send success')
}




})