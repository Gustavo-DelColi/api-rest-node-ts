import Mail from "nodemailer/lib/mailer";
import { IMailProvider, IMessage } from "../IMailProvider";
import nodemailer from 'nodemailer'

export class MailtrapMailProvider implements IMailProvider{
    private transporter: Mail;

    constructor(){
        this.transporter = nodemailer.createTransport({
          host:'sandbox.smtp.mailtrap.io',
          port: 2525,
          auth:{
            user: 'd719a721d085cc',
            pass: '7869eff5b4fb66'
          }  
        })
    }

    async sendMail(message: IMessage): Promise<void>{
        await this. transporter.sendMail({
            to: {
                name: message.to.email,
                address: message.to.email,
            },
            from: {
                name: message.from.email,
                address: message.from.email,
            },
            subject: message.subject,
            html: message.body,
        })
    }

}