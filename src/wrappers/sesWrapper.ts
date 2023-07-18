import nodemailer, { SendMailOptions, Transporter } from "nodemailer";
import { SES } from "@aws-sdk/client-ses";

interface SesConfig {
  region: string;
  accessKeyId: string;
  secretAccessKey: string;
}

export class SesEmailSender {
  private transporter?: Transporter;

  async connect(sesConfig: SesConfig) {
    const sesClient = new SES({
      apiVersion: "2010-12-01",
      region: sesConfig.region,
      credentials: {
        accessKeyId: sesConfig.accessKeyId,
        secretAccessKey: sesConfig.secretAccessKey,
      }
    });

    this.transporter = nodemailer.createTransport({ SES: { ses: sesClient, aws: SES } });

    this.transporter.verify((error) => {
      if (error) {
        console.error("Failed to connect to SES:", error);
      } else {
        console.log("Connected to SES");
      }
    });
  }

  disconnect(): void {
    if (!this.transporter) throw new Error('Cannot access SES client before connecting');
    this.transporter.close();
    console.log("Disconnected from SES");
  }

  sendMail(mailOptions: SendMailOptions): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      if (!this.transporter) throw new Error('Cannot access SES client before connecting');
      this.transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error("Error sending email:", error);
          reject(error);
        } else {
          console.log("Email sent successfully!");
          resolve();
        }
      });
    });
  }
}