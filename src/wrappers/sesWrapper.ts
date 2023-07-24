import * as aws from "@aws-sdk/client-ses";
import { SES, SESClientConfig } from "@aws-sdk/client-ses";
import nodemailer, { SendMailOptions, Transporter } from "nodemailer";

export class SesEmailSender {
  private transporter?: Transporter;

  async connect(sesConfig: SESClientConfig) {
    const sesClient = new SES(sesConfig);
    this.transporter = nodemailer.createTransport({ SES: { ses: sesClient, aws } });
    await this.transporter.verify();
  }

  disconnect(): void {
    if (!this.transporter) throw new Error('Cannot access SES client before connecting');
    this.transporter.close();
  }

  async sendMail(mailOptions: SendMailOptions): Promise<void> {
    if (!this.transporter) throw new Error('Cannot access SES client before connecting');
    await this.transporter.sendMail(mailOptions);
  }
}