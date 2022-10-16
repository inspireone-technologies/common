import { Message, Stan } from 'node-nats-streaming';
import { Subjects } from '../events/subjects';

interface Event {
  subject: Subjects;
  data: any;
}

export abstract class Listener<T extends Event> {
  protected subject: T['subject'];
  protected queueGroupName: string;
  protected onMessage: Function;
  protected client: Stan;
  protected ackWait = 5 * 1000;

  constructor(client: Stan, queueGroupName: string, subject: T['subject'], onMessage: Function) {
    this.client = client;
    this.queueGroupName = queueGroupName;
    this.subject = subject;
    this.onMessage = onMessage;
  }

  subscriptionOptions() {
    return this.client
      .subscriptionOptions()
      .setDeliverAllAvailable()
      .setManualAckMode(true)
      .setAckWait(this.ackWait)
      .setDurableName(this.queueGroupName);
  }

  listen() {
    const subscription = this.client.subscribe(
      this.subject,
      this.queueGroupName,
      this.subscriptionOptions()
    );

    subscription.on('message', (msg: Message) => {
      console.log(`Message received: ${this.subject} / ${this.queueGroupName}`);

      const parsedData = this.parseMessage(msg);
      this.onMessage(parsedData, msg);
    });
  }

  parseMessage(msg: Message) {
    const data = msg.getData();
    return typeof data === 'string'
      ? JSON.parse(data)
      : JSON.parse(data.toString('utf8'));
  }
}
