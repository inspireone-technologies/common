import { Stan } from 'node-nats-streaming';
import { Subjects } from '../events/subjects';

interface Event {
  subject: Subjects;
  data: any;
}

export abstract class Publisher<T extends Event> {
  protected subject: T['subject'];
  protected client: Stan;

  constructor(client: Stan, subject: T['subject']) {
    this.client = client;
    this.subject = subject;
  }

  publish(data: T['data']): Promise<void> {
    return new Promise((resolve, reject) => {
      this.client.publish(this.subject, JSON.stringify(data), (err) => {
        if (err) return reject(err);
        console.log('Event published to subject', this.subject);
        resolve();
      });
    });
  }
}
