"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Data Transfer Object (DDD)
class EmailService {
    sendMail({ to, message }) {
        console.log(`Email enviado ${to.name}: ${message.subject}`);
    }
}
exports.default = EmailService;
