import nodemailer from 'nodemailer';
export async function SendEmail(EmailTo,EmailText,EmailSubject){
   let Transport= nodemailer.createTransport({
        host:"csenajmulislamnaeem@gmail.com",
        port:465,
        secure:true,
        auth:{user:"csenajmulislamnaeem@gmail.com", pass:"qekkqfjvcdnhmexg"},
        tls:{rejectUnauthorized:false}
    })
    let MailOption={
       from:"Next JS News Portal <csenajmulislamnaeem@gmail.com>",
       to:EmailTo,
       subject:EmailSubject,
       text:EmailText
    }
    return await Transport.sendMail(MailOption)
}
