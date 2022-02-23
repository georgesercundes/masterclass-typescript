interface IMailTo {
  name: string;
  email: string;
}

interface ImailMessage {
  subject: string;
  body: string;
  attachment?: string[];
}

interface IMessageDTO {
  to: IMailTo;
  message: ImailMessage;
}

interface IEmailService {
  sendMail(request:IMessageDTO):void
}

// Data Transfer Object (DDD)

class EmailService {
  sendMail({ to, message }: IMessageDTO) {
    console.log(`Email enviado ${to.name}: ${message.subject}`);
  }
}

export default EmailService;
