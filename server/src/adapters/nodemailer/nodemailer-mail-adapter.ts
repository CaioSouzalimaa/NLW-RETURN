import nodemailer from 'nodemailer'
import { MailAdapter, SendMailData } from '../mail-adapter';


const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "3e0c91a0a2eff8",
    pass: "5c05e1e67ec581"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Caio Souza <caiosouzalima200@gmail.com>',
      subject,
      html: body,
    })
  };
}