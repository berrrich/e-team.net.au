import { type NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';
import { sql } from '@vercel/postgres';

export async function POST(request: NextRequest) {
  const { email, name, message } = await request.json();
  //const date = new Date().toISOString().split('T')[0];
  const date = new Date().toISOString();
  const transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    /* 
    service: 'gmail',
    host: "mail.scootersquad.net",
    service: 'gmail',
      setting service as 'gmail' is same as providing these setings:
      host: "smtp.gmail.com",
      port: 465,
      secure: true
      If you want to use a different email provider other than gmail, you need to provide these manually.
      Or you can go use these well known services and their settings at
      https://github.com/nodemailer/nodemailer/blob/master/lib/well-known/services.json
  */
    auth: {
      user: process.env.MY_SS_EMAIL,
      pass: process.env.MY_SS_PASSWORD,
    },
    
  });

  const mailOptions: Mail.Options = {
    from: process.env.MY_SS_EMAIL,
    to: process.env.MY_SS_EMAIL,
    cc: [email,process.env.MY_EMAIL],
    subject: `Message from ${name} (${email})`,
    text: message,
  };

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve('Email sent');
        } else {
          reject(err.message);
        }
      });
    });

  try {    
    await sendMailPromise();      
    await sql`
    INSERT INTO contacts ( name, createdtime, email, message)
    VALUES ( ${name}, ${date}, ${email}, ${message} )
  `;
    return NextResponse.json({ message: 'Email sent' });

    
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }

}